import { test, expect } from '../fixtures/pages'

// Feature: User registration
// Scenario: Successfully register a new user account
test.describe('User registration', () => {
  test('Successfully register a new user account', async ({ page, homePage, registerPage }) => {
    // Given I am on the home page as a new visitor
    await homePage.open()

    // When I navigate to the sign-up page
    await registerPage.open()

    // And I submit the registration form with valid credentials
    const uniqueEmail = `test.user.${Date.now()}@example.com`
    const uniquePassword = `John${Date.now()}!`

    await registerPage.register({
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
      email: `jon.snow.${Date.now()}@nightswatch.com`,
      password: uniquePassword
    })

    if (await registerPage.errorMessage.isVisible()) {
      const errorText = await registerPage.errorMessage.textContent()
      throw new Error(`Registration failed with server error: ${errorText}`)
    }

    // Then the registration success message should be visible
    // And the login form should be visible
    await expect(page).toHaveURL(/\/auth\/login/)
  })
})
