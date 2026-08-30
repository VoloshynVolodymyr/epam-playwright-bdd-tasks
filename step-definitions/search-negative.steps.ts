import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { CustomWorld } from '../support/world'

// "Given I am on the home page" and the "When I search..." step are reused
// from search.steps.ts automatically.

Then('no products should be visible in the search results', async function (this: CustomWorld) {
  await expect(this.pages.productOverviewPage.productCards).toHaveCount(0)
})
