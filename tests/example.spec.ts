import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('should show message with invalid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  // Enter invalid credentials.
  await page.locator('#dropdown').selectOption({label: 'Option 1'}); 

  await expect(page.locator('#dropdown')).toHaveValue('1');
 
});

test('select multiplr opption', async ({ page }) => {
  await page.goto('https://output.jsbin.com/osebed/2');

  // Enter invalid credentials.
  await page.locator('#fruits').selectOption((['apple', 'banana']));

  await expect(page.locator('#fruits > option:checked')).toHaveText(['Banana', 'Apple']);
  //find the min value of the selected options = == ===
});

