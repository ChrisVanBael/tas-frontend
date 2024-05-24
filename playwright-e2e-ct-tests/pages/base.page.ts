import { Locator, Page } from '@playwright/test';

export class BasePage {

  protected page: Page;
  protected pageLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageLocator = this.page.locator('div#app');
  }

}
