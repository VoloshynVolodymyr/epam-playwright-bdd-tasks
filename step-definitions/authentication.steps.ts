import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { CustomWorld } from '../support/world'

Given('I navigate to the login page', async function (this: CustomWorld) {
  await this.pages.loginPage.open()
})

When(
  'I log in with email {string} and password {string}',
  async function (this: CustomWorld, email: string, password: string) {
    await this.pages.loginPage.login(email, password)
    await this.page.waitForURL(/\/account/)
  }
)

Then('my account menu should be visible in the header', async function (this: CustomWorld) {
  await expect(this.pages.loginPage.header.accountMenuToggle).toBeVisible()
})

Then(
  'the sign out option should be visible in the navigation menu',
  async function (this: CustomWorld) {
    await this.pages.loginPage.header.openAccountMenu()
    await expect(this.pages.loginPage.header.signOutLink).toBeVisible()
  }
)
