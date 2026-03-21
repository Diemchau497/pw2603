//import
import { test, expect } from '@playwright/test';

test('should show message with invalid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');  
  //change et by locator by get by role and get by label
  
  await page.locator('#username').fill('invalid_user');
  await page.locator('#password').fill('invalid_password');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
})

test('should show message with invalid credentials by xpath', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');  
  
  await page.locator('//input[@id="username"]').fill('invalid_user');
  await page.locator('//input[@id="password"]').fill('invalid_password');
  await page.locator('//button[@type="submit"]').click();
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
})