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
});

test('emits article metadata and structured data for writing detail pages', async ({ page }) => {
  await page.goto('/en/writing/this-site/');

  await expect(page.getByRole('heading', { name: 'Building this site' })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://jaeyeong.me/en/writing/this-site/',
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');

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

test('serves the exported not-found page', async ({ page }) => {
  await page.goto('/404/');

  await expect(page.getByRole('heading', { name: '페이지를 찾을 수 없습니다' })).toBeVisible();
  await expect(page.getByRole('link', { name: '홈으로 이동' })).toBeVisible();
});
