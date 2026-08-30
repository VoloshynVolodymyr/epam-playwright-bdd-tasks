import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { CustomWorld } from '../support/world'

Given('I navigate to the sign-up page', async function (this: CustomWorld) {
  await this.pages.registerPage.open()
})

When(
  'I submit the registration form with valid unique credentials',
  async function (this: CustomWorld) {
    const uniqueEmail = `jon.snow.${crypto.randomUUID()}@nightswatch.com`
    const uniquePassword = `John${Date.now()}!`

    await this.pages.registerPage.register({
      firstName: 'Jon',
      lastName: 'Snow',
      dob: '1990-01-01',
      countryCode: 'IS',
      postalCode: '10000',
      houseNumber: '999',
      street: 'Castle Black',
      city: 'Beyond the Wall',
      state: 'The North',
      phone: '0000000001',
      email: uniqueEmail,
      password: uniquePassword
    })
  }
)

Then('no registration error should be shown', async function (this: CustomWorld) {
  await expect(this.pages.registerPage.errorMessage).not.toBeVisible()
})

Then('I should be redirected to the login page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/\/auth\/login/)
})
