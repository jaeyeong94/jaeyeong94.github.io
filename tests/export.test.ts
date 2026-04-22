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

function extractHtmlLang(html: string) {
  return extract(html, /<html[^>]*lang="([^"]+)"/, 'html lang');
}

describe('static export smoke', () => {
  it('renders locale pages with a server-side html lang attribute', () => {
    const html = readExportedHtml('en/index.html');

    expect(extractHtmlLang(html)).toBe('en');
  });

  it('marks the redirect root page as noindex', () => {
    const html = readExportedHtml('index.html');

    expect(html).toContain('<meta name="robots" content="noindex, follow"/>');
  });

  it('renders localized navigation affordances on the Korean homepage', () => {
    const html = readExportedHtml('ko/index.html');

    expect(html).toContain('본문으로 건너뛰기');
    expect(html).toContain('섹션 검색 열기');
    expect(html).toContain('포트폴리오 · Vol. 01');
    expect(html).toContain('커리어 타임라인');
    expect(html).toContain('선별된 성과');
    expect(html).toContain('500+ 무중단 배포');
    expect(html).toContain('주요 작업 보기');
    expect(html).toContain('작업 방식');
    expect(html).toContain('운영 중');
    expect(html).toContain('"@type":"CollectionPage"');
    expect(html).toContain('"name":"프로젝트"');
    expect(html).toContain('"name":"글"');
    expect(html).toContain('/ko/projects/flfi-lending/');
    expect(html).toContain('보험 백오피스를 에이전트 오케스트레이션 흐름으로 재구성');
    expect(html).toContain('github.com/jaeyeong94');
    expect(html).toContain('나인파이브주식회사');
    expect(html).toContain('AWS Cognito 기반 인증 시스템 구축');
    expect(html.indexOf('id="skills"')).toBeLessThan(html.indexOf('id="writing"'));
    expect(html.indexOf('id="writing"')).toBeLessThan(html.indexOf('id="manifesto"'));
  });

  it('emits refreshed homepage metadata for the English locale', () => {
    const html = readExportedHtml('en/index.html');

    expect(html).toContain('<meta name="description" content="Full-stack developer designing and operating 0→1 SaaS, AI orchestration, and fintech systems with strengths in backend architecture and AWS/Kubernetes infrastructure."/>');
    expect(html).toContain('<meta property="og:description" content="Full-stack developer designing and operating 0→1 SaaS, AI orchestration, and fintech systems with strengths in backend architecture and AWS/Kubernetes infrastructure."/>');
    expect(html).toContain('<meta property="og:type" content="website"/>');
    expect(html).toContain('https://jaeyeong.me/opengraph-image');
    expect(html).toContain('https://jaeyeong.me/twitter-image');
    expect(html).toContain('<link rel="manifest" href="/manifest.webmanifest"/>');
    expect(html).toContain('/apple-touch-icon.png');
  });

  it('emits localized metadata for English writing detail pages', () => {
    const html = readExportedHtml('en/writing/this-site/index.html');

    expect(collectMetadata(html)).toMatchInlineSnapshot(`
      {
        "articlePublishedTime": "2026-04-15",
        "canonical": "https://jaeyeong.me/en/writing/this-site/",
        "description": "A retrospective on designing a Next.js · 4-locale · GitHub Pages résumé from scratch.",
        "ogDescription": "A retrospective on designing a Next.js · 4-locale · GitHub Pages résumé from scratch.",
        "ogTitle": "Building this site",
        "ogType": "article",
        "title": "Building this site",
        "twitterCard": "summary_large_image",
      }
    `);
    expect(html).toMatch(/\/en\/writing\/this-site\/opengraph-image-[^"?]+/);
    expect(html).toMatch(/\/en\/writing\/this-site\/twitter-image-[^"?]+/);
    expect(html).toContain('/en/writing/this-site/opengraph-image"');
  });

  it('exports the Momentir case study page', () => {
    const html = readExportedHtml('en/projects/momentir/index.html');

    expect(html).toContain('Momentir');
    expect(html).toContain('12-agent pilot');
    expect(html).toContain('https://jaeyeong.me/en/projects/momentir/');
    expect(html).toMatch(/\/en\/projects\/momentir\/opengraph-image-[^"?]+/);
    expect(html).toMatch(/\/en\/projects\/momentir\/twitter-image-[^"?]+/);
    expect(html).toContain('/en/projects/momentir/opengraph-image"');
  });

  it('exports the FLFI fintech platform case study page', () => {
    const html = readExportedHtml('en/projects/flfi-lending/index.html');

    expect(html).toContain('FLFI Fintech Platform');
    expect(html).toContain('500+ zero-downtime deploys');
    expect(html).toContain('https://jaeyeong.me/en/projects/flfi-lending/');
  });

  it('copies stable metadata image routes after build', () => {
    expect(existsSync(resolve(outDir, 'opengraph-image'))).toBe(true);
    expect(existsSync(resolve(outDir, 'twitter-image'))).toBe(true);
    expect(existsSync(resolve(outDir, 'en/projects/momentir/opengraph-image'))).toBe(true);
    expect(existsSync(resolve(outDir, 'en/projects/momentir/twitter-image'))).toBe(true);
    expect(existsSync(resolve(outDir, 'en/writing/this-site/opengraph-image'))).toBe(true);
    expect(existsSync(resolve(outDir, 'en/writing/this-site/twitter-image'))).toBe(true);
  });

  it('exports manifest and favicon assets', () => {
    expect(existsSync(resolve(outDir, 'manifest.webmanifest'))).toBe(true);
    expect(existsSync(resolve(outDir, 'favicon.svg'))).toBe(true);
    expect(existsSync(resolve(outDir, 'favicon-32x32.png'))).toBe(true);
    expect(existsSync(resolve(outDir, 'apple-touch-icon.png'))).toBe(true);
    expect(existsSync(resolve(outDir, 'icon-192.png'))).toBe(true);
    expect(existsSync(resolve(outDir, 'icon-512.png'))).toBe(true);
  });
});
