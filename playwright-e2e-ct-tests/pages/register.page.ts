import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class RegisterPage extends BasePage {
  // Locators
  private pageContainer = this.pageLocator.locator(
    "[data-testid='register-page-container']"
  );
  private registerForm = this.pageContainer.locator(
    "[data-testid='register-form']"
  );

  private name = this.registerForm.locator("[data-testid='name'] input");
  private email = this.registerForm.locator("[data-testid='email'] input");
  private password = this.registerForm.locator(
    "[data-testid='password'] input"
  );
  private passwordCheck = this.registerForm.locator(
    "[data-testid='password-check'] input"
  );
  private phoneNumber = this.registerForm.locator(
    "[data-testid='phone-number'] input"
  );
  private terms = this.registerForm.locator("[data-testid='terms'] input");

  private formErrorMessage = this.registerForm.locator(
    "[data-testid='form-error-message']"
  );
  private formErrorExplanation = this.registerForm.locator(
    "[data-testid='form-error-explanation']"
  );

  private registerButton = this.registerForm.locator(
    "[data-testid='register-button']"
  );

  // constructor
  constructor(page: Page) {
    super(page);
  }

  // Page actions
  get getPageContainer() {
    return this.pageContainer;
  }

  /**
   * Fill the registration form
   * @param name name of the user
   * @param email email of the user
   * @param password password of the user
   * @param passwordCheck password check
   * @param phoneNumber phone number of the user
   * @param acceptTerms if the user accepts the terms
   */
  async fillForm(
    name: string,
    email: string,
    password: string,
    passwordCheck: string,
    phoneNumber: string,
    acceptTerms: boolean
  ) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.passwordCheck.fill(passwordCheck);
    await this.phoneNumber.fill(phoneNumber);
    if (acceptTerms) {
      await this.terms.check();
    } else {
      await this.terms.uncheck();
    }
  }

  /**
   * Register a new account
   * @param name name of the user
   * @param email email of the user
   * @param password password of the user
   * @param passwordCheck password check
   * @param phoneNumber phone number of the user
   * @param acceptTerms if the user accepts the terms
   */
  async registerNewAccount(
    name: string,
    email: string,
    password: string,
    passwordCheck: string,
    phoneNumber: string,
    acceptTerms: boolean
  ) {
    await this.fillForm(
      name,
      email,
      password,
      passwordCheck,
      phoneNumber,
      acceptTerms
    );

    await this.registerButton.click();
  }

  get getFormErrorMessage() {
    return this.formErrorMessage;
  }

  get getFormErrorExplanation() {
    return this.formErrorExplanation;
  }

  get getRegisterButton() {
    return this.registerButton;
  }

}
