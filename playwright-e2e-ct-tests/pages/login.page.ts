import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {

  // Locators
  private pageContainer = this.pageLocator.locator("[data-testid='login-container']");

  // constructor
  constructor(page: Page) {
    super(page);
  }

  // Page actions
  get getPageContainer() {
    return this.pageContainer;
  }

}
