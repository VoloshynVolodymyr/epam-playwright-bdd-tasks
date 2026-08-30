@ui @registration
Feature: User registration

  Scenario: Successfully register a new user account
    Given I navigate to the sign-up page
    When I submit the registration form with valid unique credentials
    Then no registration error should be shown
    And I should be redirected to the login page