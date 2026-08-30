import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator

  constructor(page: Page) {
    super(page, '/auth/login')
    this.emailInput = page.locator('[data-test="email"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.submitButton = page.locator('[data-test="login-submit"]')
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }
}
