import { gzipSync } from 'node:zlib';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const budgets = [
  { route: 'index.html', maxGzipBytes: 180 * 1024 },
  { route: 'en/index.html', maxGzipBytes: 200 * 1024 },
  { route: 'en/writing/this-site/index.html', maxGzipBytes: 190 * 1024 },
];

function formatKiB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}

function readRouteJsBytes(route) {
  const htmlPath = join(process.cwd(), 'out', route);
  if (!existsSync(htmlPath)) {
    throw new Error(`Exported HTML not found: ${route}. Run "pnpm build" first.`);
  }

  const html = readFileSync(htmlPath, 'utf8');
  const references = [...html.matchAll(/(?:src|href)="(\/_next\/[^"?#]+\.js)"/g)].map((match) =>
    decodeURIComponent(match[1]),
  );
  const uniqueReferences = [...new Set(references)];

  return uniqueReferences.reduce((total, reference) => {
    const filePath = join(process.cwd(), 'out', reference.slice(1));
    const js = readFileSync(filePath);
    return total + gzipSync(js).length;
  }, 0);
}

const failures = [];

for (const budget of budgets) {
  const size = readRouteJsBytes(budget.route);
  const summary = `${budget.route}: ${formatKiB(size)} / budget ${formatKiB(budget.maxGzipBytes)}`;
  if (size > budget.maxGzipBytes) {
    failures.push(summary);
  } else {
    console.log(`PASS ${summary}`);
  }
}

if (failures.length) {
  console.error('Bundle budget exceeded:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}
