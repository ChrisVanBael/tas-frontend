import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/register.page';
import { RegisterSuccessPage } from '../pages/register.success.page';
import { MenuComponent } from '../pages/menu.component';

let homePage: HomePage;
let menu: MenuComponent;
let registerPage: RegisterPage;
let registerSuccessPage: RegisterSuccessPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  menu = new MenuComponent(page);
  registerPage = new RegisterPage(page);
  registerSuccessPage = new RegisterSuccessPage(page);

  await page.goto('/');
});

test('when a registration is successful the success page is shown', async ({ page }) => {

  const body = `
  {
    "name": "name",
    "email": "a@a.com",
    "password": "1234",
    "phoneNumber": "555-4711",
  }
`
  // define the mocked response for the register endpoint
  await page.route('*/**/register-user', async route => {
    await route.fulfill({
      status: 200,
      body
    });
  });

  // open the register page
  await menu.openRegisterPage();

  // enter register data
  await registerPage.registerNewAccount(
    'name',
    'a@a.com',
    '1234',
    '1234',
    '555-4711',
    true
  );
  // mock returns a success message which the frontend can handle
  // expect success page
  await expect(registerSuccessPage.getPageContainer).toBeVisible();
});
