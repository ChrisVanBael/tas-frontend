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
  await menu.openRegisterPage(); // open the register page
});

test('whenPasswordsAreNotTheSameTheUserCannotBeRegistered', async ({ page }) => {

  // enter register data
  await registerPage.fillForm(
    'name',
    'email',
    'password',
    '1234',
    '+31612345678',
    true
  );

  // expect register button to be disabled
  await expect(registerPage.getRegisterButton).toBeDisabled();
});


test('whenTheTermsAreNotAcceptedTheUserCannotBeRegistered', async ({ page }) => {

  // enter register data and do not accept the terms
  // -- implement this step
  await registerPage.fillForm(
    'name',
    'email',
    'password',
    'password',
    '+31612345678',
    false
  );

  // expect register button to be disabled
  // -- implement this step
  await expect(registerPage.getRegisterButton).toBeDisabled();
});
