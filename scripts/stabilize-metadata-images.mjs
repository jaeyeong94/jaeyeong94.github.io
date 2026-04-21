import { cp, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const outDir = new URL('../out/', import.meta.url);
const routeImagePatterns = [
  { prefix: 'opengraph-image-', target: 'opengraph-image' },
  { prefix: 'twitter-image-', target: 'twitter-image' },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
        return;
      }

      for (const pattern of routeImagePatterns) {
        if (!entry.name.startsWith(pattern.prefix)) continue;
        await cp(fullPath, join(dir, pattern.target), { force: true });
      }
    }),
  );
}

await walk(outDir.pathname);
