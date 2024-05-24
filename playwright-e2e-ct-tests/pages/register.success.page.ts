import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class RegisterSuccessPage extends BasePage {

  // Locators
  private pageContainer = this.pageLocator.locator("[data-testid='register-success-page-container']");

  // constructor
  constructor(page: Page) {
    super(page);
  }

  // Page actions
  get getPageContainer() {
    return this.pageContainer;
  }

}
