import { test, expect } from '@playwright/test';



test.describe('Table1 Tests', () => {
    type TableData = { firstName: string; lastName: string; due: string };
    let tableData: TableData[];

    test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');

    const table = page.locator('#table1');
    const rows = table.locator('tbody tr');
    
    tableData = await rows.evaluateAll((rows) =>  {
        return rows.map((row)  => {
              const cells = row.querySelectorAll('td');
              return { 
                firstName: cells[1].innerText,
                lastName: cells[0].innerText,
                due: cells[3].innerText.replace('$', '')
              }
        })
    });

 
     });

    test('verify full name of max due person', async ({ page }) => {
        //find the max due amount 
        tableData.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
        const maxDueValue = tableData[0].due;
        const maxDuePerson = tableData.find(person => person.due === maxDueValue);
        const firstName = maxDuePerson?.firstName;
        const lastName = maxDuePerson?.lastName;
        expect(`${firstName} ${lastName}`).toBe('Jason Doe');
 
    });


    test('verify full name of min due person', async ({ page }) => {
        //find the min due amount 
        tableData.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
        const minDueValue = tableData[0].due;
        const minDuePerson = tableData.filter(person => person.due === minDueValue);
        const fullName = minDuePerson.map(person => `${person.firstName} ${person.lastName}`);
        expect(fullName).toEqual(['John Smith', 'Tim Conway']);  
});
});    