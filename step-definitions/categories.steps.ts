import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { CustomWorld } from '../support/world'

When(
  'I select the {string} category from the navigation menu',
  async function (this: CustomWorld, category: string) {
    expect(category).toBe('Power tools')
    await this.pages.homePage.header.openCategory(this.pages.homePage.header.powerToolsLink)
  }
)

Then('the page title should display {string}', async function (this: CustomWorld, title: string) {
  await expect(this.page).toHaveURL(/\/category\/power-tools/)
  await expect(this.pages.productOverviewPage.pageTitle).toContainText(title)
})

Then('the product list should not be empty', async function (this: CustomWorld) {
  await expect(this.pages.productOverviewPage.productCards).not.toHaveCount(0)
})
