import { test, expect } from '../fixtures/pages'

// Feature: User registration
// Scenario: Successfully register a new user account
test.describe('User registration', () => {
  test('Successfully register a new user account', async ({ page, pages }) => {
    // When I navigate to the sign-up page
    await pages.registerPage.open()

    // And I submit the registration form with valid credentials
    const uniqueEmail = `jon.snow.${Date.now()}@nightswatch.com`
    const uniquePassword = `John${Date.now()}!`

    await pages.registerPage.register({
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

    await expect(pages.registerPage.errorMessage).not.toBeVisible()

    // Then the registration success message should be visible
    // And the login form should be visible
    await expect(page).toHaveURL(/\/auth\/login/)
  })
})
