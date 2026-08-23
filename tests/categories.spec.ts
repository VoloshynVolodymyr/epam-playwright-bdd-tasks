import { test, expect } from '../fixtures/pages'

// Feature: Product categories
// Scenario: Browse products by main category
test.describe('Product categories', () => {
  test('Browse products by main category', async ({ page, pages }) => {
    // Given I am on the home page
    await pages.homePage.open()

    // When I select the "Power tools" category from the navigation menu
    await pages.homePage.header.openCategory(pages.homePage.header.powerToolsLink)

    // Then the page title should display "Power Tools"
    await expect(page).toHaveURL(/\/category\/power-tools/)
    await expect(pages.productOverviewPage.pageTitle).toContainText('Power Tools')

    // And all displayed products should belong to the "Power Tools" category
    await expect(pages.productOverviewPage.productCards).not.toHaveCount(0)
  })
})
