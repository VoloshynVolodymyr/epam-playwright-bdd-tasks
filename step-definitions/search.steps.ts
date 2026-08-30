import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { CustomWorld } from '../support/world'

Given('I am on the home page', async function (this: CustomWorld) {
  await this.pages.homePage.open()
})

When('I search for the product {string}', async function (this: CustomWorld, query: string) {
  await this.pages.productOverviewPage.searchForProduct(query)
})

Then(
  'the product {string} should be visible in the search results',
  async function (this: CustomWorld, productName: string) {
    const card = this.pages.productOverviewPage.getProductCardByName(productName)
    await expect(card).toBeVisible()
  }
)
