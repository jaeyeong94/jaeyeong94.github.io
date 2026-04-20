import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const outDir = resolve(process.cwd(), 'out');

function readExportedHtml(relativePath: string) {
  const fullPath = resolve(outDir, relativePath);
  if (!existsSync(fullPath)) {
    throw new Error(`Static export not found: ${relativePath}. Run "pnpm build" first.`);
  }
  return readFileSync(fullPath, 'utf8');
}

function extract(html: string, pattern: RegExp, label: string) {
  const match = html.match(pattern);
  if (!match) {
    throw new Error(`Unable to find ${label}`);
  }
  return match[1];
}

function collectMetadata(html: string) {
  return {
    title: extract(html, /<title>([^<]+)<\/title>/, 'title'),
    description: extract(html, /<meta name="description" content="([^"]+)"/, 'description'),
    canonical: extract(html, /<link rel="canonical" href="([^"]+)"/, 'canonical'),
    ogTitle: extract(html, /<meta property="og:title" content="([^"]+)"/, 'og:title'),
    ogDescription: extract(
      html,
      /<meta property="og:description" content="([^"]+)"/,
      'og:description',
    ),
    ogType: extract(html, /<meta property="og:type" content="([^"]+)"/, 'og:type'),
    articlePublishedTime: extract(
      html,
      /<meta property="article:published_time" content="([^"]+)"/,
      'article:published_time',
    ),
    twitterCard: extract(html, /<meta name="twitter:card" content="([^"]+)"/, 'twitter:card'),
  };
}

describe('static export smoke', () => {
  it('renders localized navigation affordances on the Korean homepage', () => {
    const html = readExportedHtml('ko/index.html');

    expect(html).toContain('본문으로 건너뛰기');
    expect(html).toContain('섹션 검색 열기');
    expect(html).toContain('포트폴리오 · Vol. 01');
    expect(html).toContain('커리어 타임라인');
  });

  it('emits localized metadata for English writing detail pages', () => {
    const html = readExportedHtml('en/writing/this-site/index.html');

    expect(collectMetadata(html)).toMatchInlineSnapshot(`
      {
        "articlePublishedTime": "2026-04-15",
        "canonical": "https://jaeyeong94.github.io/en/writing/this-site/",
        "description": "A retrospective on designing a Next.js · 4-locale · GitHub Pages résumé from scratch.",
        "ogDescription": "A retrospective on designing a Next.js · 4-locale · GitHub Pages résumé from scratch.",
        "ogTitle": "Building this site",
        "ogType": "article",
        "title": "Building this site",
        "twitterCard": "summary_large_image",
      }
    `);
  });
});
