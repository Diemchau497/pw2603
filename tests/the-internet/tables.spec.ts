import { test, expect } from '@playwright/test';

test('verify table content', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const table = await page.locator('#table1 tbody tr td').allTextContents();
    console.log(table);
    const dueAmont = await page.locator('#table1 tbody tr:nth-child(1) td:nth-child(4)').allTextContents();
    console.log(dueAmont);
    const maxDueValue = Math.max(...dueAmont.map(amount => parseFloat(amount.replace('$', ''))));
    const maxDueIndex = dueAmont.indexOf('$' + maxDueValue.toFixed(2));

    const firstName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(2)`).textContent();
    const lastName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(1)`).textContent();
    console.log(`The person with the highest due amount is ${firstName} ${lastName} with a due amount of $${maxDueValue.toFixed(2)}`);
 
});