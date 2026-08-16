import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export interface RegistrationData {
  firstName: string
  lastName: string
  dob: string
  street: string
  postalCode: string
  houseNumber: string
  city: string
  state: string
  countryCode: string
  phone: string
  email: string
  password: string
}

export class RegisterPage extends BasePage {
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly dobInput: Locator
  readonly streetInput: Locator
  readonly postalCodeInput: Locator
  readonly houseNumberInput: Locator
  readonly cityInput: Locator
  readonly stateInput: Locator
  readonly countrySelect: Locator
  readonly phoneInput: Locator
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator

  constructor(page: Page) {
    super(page, '/auth/register')
    this.firstNameInput = page.locator('[data-test="first-name"]')
    this.lastNameInput = page.locator('[data-test="last-name"]')
    this.dobInput = page.locator('[data-test="dob"]')
    this.streetInput = page.locator('[data-test="street"]')
    this.postalCodeInput = page.locator('[data-test="postal_code"]')
    this.houseNumberInput = page.locator('[data-test="house_number"]')
    this.cityInput = page.locator('[data-test="city"]')
    this.stateInput = page.locator('[data-test="state"]')
    this.countrySelect = page.locator('[data-test="country"]')
    this.phoneInput = page.locator('[data-test="phone"]')
    this.emailInput = page.locator('[data-test="email"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.submitButton = page.locator('[data-test="register-submit"]')
    this.errorMessage = page.locator('[data-test="register-error"]')
  }

  async register(data: RegistrationData): Promise<void> {
    await this.firstNameInput.fill(data.firstName)
    await this.lastNameInput.fill(data.lastName)
    await this.dobInput.fill(data.dob)
    await this.countrySelect.selectOption(data.countryCode)
    await this.postalCodeInput.fill(data.postalCode)
    await this.houseNumberInput.fill(data.houseNumber)
    await this.streetInput.fill(data.street)
    await this.cityInput.fill(data.city)
    await this.stateInput.fill(data.state)
    await this.phoneInput.fill(data.phone)
    await this.emailInput.fill(data.email)
    await this.passwordInput.fill(data.password)
    await this.submitButton.click()
  }
}
