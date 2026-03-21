import { test, expect } from '@playwright/test';

test('verify broken image', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/broken_images');
    const images = page.locator('img');
})