import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { RegisterPage } from "../pages/register.page";
import { MenuComponent } from "../pages/menu.component";

let homePage: HomePage;
let menu: MenuComponent;
let registerPage: RegisterPage;
let loginPage: LoginPage;


test.beforeEach(async ({ page }) => {
  menu = new MenuComponent(page);
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  loginPage = new LoginPage(page);

  await page.goto('/');
});

test('it should be possible to open the register page', async () => {
  await menu.openRegisterPage();
  await expect(registerPage.getPageContainer).toBeVisible();
});

test('it should be possible to open the login page', async () => {
  await menu.openLoginPage();
  await expect(loginPage.getPageContainer).toBeVisible();
});

test('it should be possible to open the home page', async () => {
  // open the login page & check if it is visible (this means we are not on the home page)
  // todo: implement this step

  // now open the home page & check if it is visible
  // todo: implement this step
  
  throw new Error('Not implemented yet');
})
