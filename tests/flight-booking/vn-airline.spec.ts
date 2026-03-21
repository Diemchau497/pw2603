/**
 * Navigate https://www.vietnamairlines.com/vn/vi/
 * Chon depart la SGN -> HAN, Ngay di 25/3/2026 -> 31/3/2026
 * Verify  từ: SGN đến là HAN, ngày đi là 25/3/2026, ngày về là 31/3/2026

**/
import { test, expect, type Page } from '@playwright/test';

async function addLocatorHandler(page: Page, locatorExpression: string, callback: () => Promise<void>) {
    const locator = page.locator(locatorExpression);
    if (await locator.count() > 0 && await locator.isVisible()) {
        await callback();
    }
}

test ('verify flight booking details', async ({ page }) => {
    await page.goto('https://www.vietnamairlines.com/vn/vi/');

    const cookieButton = page.getByRole('button', { name: 'Chấp thuận tất cả Cookie' });
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }
    await page.getByRole('button', { name: 'Chọn điểm đi' }).click();
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }
  await page.getByText('Tp. Hồ Chí Minh', { exact: true }).click();
  await page.getByRole('button', { name: 'Chọn điểm đến' }).click();
  await page.locator('[id="_r_4_"]').getByText('Hà Nội', { exact: true }).click();
  await page.getByRole('button', { name: '21' }).first().click();
  await page.getByRole('button', { name: '-' }).nth(5).click();
  await page.getByRole('button', { name: 'Chọn', exact: true }).click();


});