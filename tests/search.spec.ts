import { test, expect } from '../fixtures/pages'

// Feature: Product search
// Scenario: Search for an exact product by name
test.describe('Product search', () => {
  test('Search for an exact product by name', async ({ page, homePage, productOverviewPage }) => {
    // Given I am on the home page
    await homePage.open()

    // When I enter "Bolt Cutters" into the search field
    // And I submit the search query
    await productOverviewPage.searchForProduct('Bolt Cutters')

    // Then the search result should be visible
    // And the product "Bolt Cutters" should be visible in the results
    const searchResultCard = productOverviewPage.getProductCardByName('Bolt Cutters')
    await expect(searchResultCard).toBeVisible()
  })
})
