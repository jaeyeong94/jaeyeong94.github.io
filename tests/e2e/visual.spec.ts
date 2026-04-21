import { expect, test } from '@playwright/test';

test('matches the Korean homepage hero snapshot', async ({ page }) => {
  test.skip(process.platform !== 'darwin', 'Visual baseline is currently maintained on macOS.');

  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto('/ko/');
  await page.waitForLoadState('networkidle');

  await expect(page.locator('main > section').first()).toHaveScreenshot('ko-home-hero.png', {
    animations: 'disabled',
    caret: 'hide',
  });
});
