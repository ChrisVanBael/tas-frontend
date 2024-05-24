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

test('when a registration is not successful the error is shown', async ({ page }) => {

  // define the mocked response to simulate an error
  // todo: implement this step

  // open the register page
  await menu.openRegisterPage();

  // enter register data
  await registerPage.registerNewAccount(
    'name',
    'email',
    'password',
    'password',
    '+31612345678',
    true
  );

  // expect an error on the register page page
  // next assert is the message returned by the web app
  await expect(registerPage.getFormErrorMessage).toHaveText('Failed to register!');

  // next assert is the message returned by the bff server
  // todo: implement this step
  
  throw new Error('Not implemented yet');

});
