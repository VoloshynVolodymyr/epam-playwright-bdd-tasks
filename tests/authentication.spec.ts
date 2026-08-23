import { test, expect } from '../fixtures/pages'

// Feature: Authentication
// Scenario: Successfully log in with valid credentials
test.describe('Authentication', () => {
  test('Successfully log in with valid credentials', async ({ pages }) => {
    // When I navigate to the login page
    await pages.loginPage.open()

    // And I log in with valid credentials (email and password) as a "registered" user
    await pages.loginPage.login('customer@practicesoftwaretesting.com', 'welcome01')

    // Then my account should be visible in the page header
    await expect(pages.loginPage.header.accountMenuToggle).toBeVisible()

    // And the "Logout" option should be visible in the navigation menu
    await pages.loginPage.header.openAccountMenu()
    await expect(pages.loginPage.header.signOutLink).toBeVisible()
  })
})
