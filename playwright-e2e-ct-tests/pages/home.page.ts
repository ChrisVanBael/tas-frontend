import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {

  // Locators
  private pageContainer = this.pageLocator.locator("[data-testid='home-page-container']");
  private loginButton = this.pageContainer.locator("[data-testid='btn-login']");
  private registerButton = this.pageContainer.locator("[data-testid='btn-register']");

  // constructor
  constructor(page: Page) {
    super(page);
  }

  // Page actions
  get getPageContainer() {
    return this.pageContainer;
  }

  async openLoginPage() {
      await this.loginButton.click();
  }

  async openRegisterPage() {
      await this.registerButton.click();
  }

}
