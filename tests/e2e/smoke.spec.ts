import { expect, test } from '@playwright/test';

test('redirects root requests using the browser locale', async ({ page }) => {
  await page.goto('/');

  await page.waitForURL('**/en/');
  await expect(page.getByRole('link', { name: 'Ted Ryu' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open section search' })).toBeVisible();
});

test('renders localized navigation affordances on the Korean homepage', async ({ page }) => {
  await page.goto('/ko/');

  await expect(page.getByText('본문으로 건너뛰기')).toBeVisible();
  await expect(page.getByRole('button', { name: '섹션 검색 열기' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '글' })).toBeVisible();
  await expect(page.getByText('선별된 성과')).toBeVisible();
  await expect(page.getByText('500+ 무중단 배포', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: '주요 작업 보기' })).toBeVisible();
  await expect(page.getByRole('link', { name: '작업 방식' })).toBeVisible();
  await expect(page.getByText('운영 중').first()).toBeVisible();
  const jsonLdEntries = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(
    jsonLdEntries.some(
      (entry) =>
        entry.includes('"@type":"CollectionPage"') &&
        entry.includes('/ko/projects/flfi-lending/'),
    ),
  ).toBe(true);
  await expect(page.getByText('보험 백오피스를 에이전트 오케스트레이션 흐름으로 재구성')).toBeVisible();
});

test('renders a print-friendly resume view on the Korean homepage', async ({ page }) => {
  await page.goto('/ko/');
  await page.emulateMedia({ media: 'print' });

  await expect(
    page.locator('.resume-print-only').getByRole('link', { name: 'github.com/jaeyeong94' }),
  ).toBeVisible();
  await expect(page.getByText('보험 백오피스를 에이전트 오케스트레이션 흐름으로 재구성')).toBeVisible();
  await expect(page.getByRole('link', { name: '주요 작업 보기' })).toBeHidden();
  await expect(page.getByRole('heading', { name: 'AI 작업 방식' })).toBeHidden();
});

test('emits article metadata and structured data for writing detail pages', async ({ page }) => {
  await page.goto('/en/writing/this-site/');

  await expect(page.getByRole('heading', { name: 'Building this site' })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://jaeyeong.me/en/writing/this-site/',
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    /\/en\/writing\/this-site\/opengraph-image-/,
  );
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    'content',
    /\/en\/writing\/this-site\/twitter-image-/,
  );

  const jsonLdEntries = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(
    jsonLdEntries.some(
      (entry) => entry.includes('"@type":"BlogPosting"') && entry.includes('"headline":"Building this site"'),
    ),
  ).toBe(true);
});

test('renders the Randibot case study page', async ({ page }) => {
  await page.goto('/en/projects/randibot/');

  await expect(page.getByRole('heading', { name: 'Randibot' })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://jaeyeong.me/en/projects/randibot/',
  );
  await expect(page.getByText('5 workspaces onboarded')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open site' })).toBeVisible();

  const jsonLdEntries = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(
    jsonLdEntries.some(
      (entry) => entry.includes('"@type":"Article"') && entry.includes('"headline":"Randibot"'),
    ),
  ).toBe(true);
});

test('renders the Momentir case study page', async ({ page }) => {
  await page.goto('/en/projects/momentir/');

  await expect(page.getByRole('heading', { name: 'Momentir' })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://jaeyeong.me/en/projects/momentir/',
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    /\/en\/projects\/momentir\/opengraph-image-/,
  );
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    'content',
    /\/en\/projects\/momentir\/twitter-image-/,
  );
  await expect(page.getByText('12-agent pilot · ~30% less ops effort')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open site' })).toBeVisible();

  const jsonLdEntries = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(
    jsonLdEntries.some(
      (entry) => entry.includes('"@type":"Article"') && entry.includes('"headline":"Momentir"'),
    ),
  ).toBe(true);
});

test('renders the FLFI fintech platform case study page', async ({ page }) => {
  await page.goto('/en/projects/flfi-lending/');

  await expect(page.getByRole('heading', { name: 'FLFI Fintech Platform' })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://jaeyeong.me/en/projects/flfi-lending/',
  );
  await expect(page.getByText('500+ zero-downtime deploys')).toBeVisible();
});

test('serves the exported not-found page', async ({ page }) => {
  await page.goto('/404/');

  await expect(page.getByRole('heading', { name: '페이지를 찾을 수 없습니다' })).toBeVisible();
  await expect(page.getByRole('link', { name: '홈으로 이동' })).toBeVisible();
});
