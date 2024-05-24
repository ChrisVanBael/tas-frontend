import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MenuComponent extends BasePage {

    // Locators
    private menuLocator = this.pageLocator.locator("[data-testid='tas-menu']");
    private homeButton = this.menuLocator.locator("[data-testid='btn-home']");
    private loginButton = this.menuLocator.locator("[data-testid='btn-login']");
    private registerButton = this.menuLocator.locator("[data-testid='btn-register']");

    // Constructor
    constructor(page: Page) {
        super(page);
    }

    // Page actions
    async openHomePage() {
        await this.homeButton.click();
    }

    async openLoginPage() {
        await this.loginButton.click();
    }

    async openRegisterPage() {
        await this.registerButton.click();
    }

}
