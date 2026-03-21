import { test, expect } from '@playwright/test';

test('select dropdown option', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption('Option 1');
    await expect(page.locator('#dropdown')).toHaveValue('1');
});