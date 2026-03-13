import { test, expect } from '@playwright/test';

test('homepage visual regression', async ({ page }) => {
  await page.goto('/');
  // Wait for images and animations to settle
  await page.waitForTimeout(2000);
  await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
});
