//import
import { test, expect } from '@playwright/test';

test('should show message with invalid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');  
})