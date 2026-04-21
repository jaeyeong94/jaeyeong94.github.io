import { mkdir, readFile, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'test-results', 'print');
const baseUrl = 'http://127.0.0.1:4173';

async function waitForServer(url, retries = 60) {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error(`Preview server did not respond in time: ${url}`);
}

function estimatePdfPages(buffer) {
  const counts = [...buffer.toString('latin1').matchAll(/\/Count\s+(\d+)/g)]
    .map((match) => Number(match[1]))
    .filter((count) => Number.isFinite(count));
  return counts.length ? Math.max(...counts) : null;
}

const server = spawn('pnpm', ['preview:out'], {
  cwd: process.cwd(),
  stdio: 'ignore',
});

try {
  await waitForServer(`${baseUrl}/ko/`);
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const { chromium } = await import('@playwright/test');
  const browser = await chromium.launch();

  try {
    for (const locale of ['ko', 'en']) {
      const page = await browser.newPage();
      await page.goto(`${baseUrl}/${locale}/`, { waitUntil: 'networkidle' });
      await page.emulateMedia({ media: 'print' });

      const filePath = join(outputDir, `${locale}-resume.pdf`);
      await page.pdf({
        path: filePath,
        format: 'A4',
        preferCSSPageSize: true,
        printBackground: true,
      });

      const pages = estimatePdfPages(await readFile(filePath));
      console.log(`${locale}: ${filePath}${pages ? ` (${pages} pages)` : ''}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
} finally {
  server.kill('SIGTERM');
}
