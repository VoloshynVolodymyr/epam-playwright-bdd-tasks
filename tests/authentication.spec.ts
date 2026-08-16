import { test, expect } from '../fixtures/pages'

// Feature: Authentication
// Scenario: Successfully log in with valid credentials
test.describe('Authentication', () => {
  test('Successfully log in with valid credentials', async ({
    page,
    homePage,
    loginPage,
    headerComponent
  }) => {
    // Given I am on the home page
    await homePage.open()

    // And I am logged into the application as a "registered" user
    // When I navigate to the login page
    await loginPage.open()

    // And I log in with valid credentials (email and password)
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01')

    // Then my account should be visible in the page header
    await expect(headerComponent.accountMenuToggle).toBeVisible()

    // And the "Logout" option should be visible in the navigation menu
    await headerComponent.openAccountMenu()
    await expect(headerComponent.signOutLink).toBeVisible()
  })
})
