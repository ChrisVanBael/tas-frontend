import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/register.page';
import { LoginPage } from '../pages/login.page';


let homePage: HomePage;
let registerPage: RegisterPage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  loginPage = new LoginPage(page);
});

test('loginPageShouldHaveTheCorrectTabTitle', async ({ page }) => {
  // expect page title "to contain" a substring
  await expect(page).toHaveTitle(/Automating Tests/);
});

test('a user should be able to navigate to the register page', async ({ page }) => {
  // go to the register page
  await homePage.openRegisterPage();

  // expect to be navigated to the register page
  await expect(registerPage.getPageContainer).toBeVisible();
});

test('a user should be able to navigate to the login page', async ({ page }) => {
  // go to the login page
  // todo: implement this step

  // expect to be navigated to the login page
  // todo: implement this step

  throw new Error('Not implemented yet');

});
