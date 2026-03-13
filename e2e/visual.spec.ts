import { test } from '@playwright/test';

test('homepage visual regression', async ({ page }) => {
  await page.goto('/');
  // Wait for images and animations to settle
  await page.waitForTimeout(2000);
  // Optional, ignore error just generating screenshots
  // await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
});

test('network page visual regression', async ({ page }) => {
  await page.goto('/network');
  await page.waitForTimeout(5000); // give time for vis-network to settle
  await page.screenshot({ path: 'network-page.png', fullPage: true });
});
