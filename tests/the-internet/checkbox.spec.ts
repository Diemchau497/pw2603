import { test, expect } from '@playwright/test';




test('verify able to uncheck the checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  await page.getByRole('checkbox').first().check();
  await expect(page.getByRole('checkbox').first()).toBeChecked();
  
  await page.getByRole('checkbox').first().uncheck();
  await expect(page.getByRole('checkbox').first()).not.toBeChecked();

  await page.getByRole('checkbox').nth(1).check();
  await expect(page.getByRole('checkbox').nth(1)).toBeChecked();  
});