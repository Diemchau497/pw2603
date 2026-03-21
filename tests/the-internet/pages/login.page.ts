import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page; 

    constructor(page: Page) {
        this.page = page;
    }
    async goTo() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string) {
        await this.page.goto('https://the-internet.herokuapp.com/login');  
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('button[type="submit"]').click();
    }

    async getWelcomeMessage() {
        return this.page.locator('h4');
    }
}