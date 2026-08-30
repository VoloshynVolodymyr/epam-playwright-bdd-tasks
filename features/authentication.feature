@ui @authentication
Feature: Authentication

  Scenario: Successfully log in with valid credentials
    Given I navigate to the login page
    When I log in with email "customer@practicesoftwaretesting.com" and password "welcome01"
    Then my account menu should be visible in the header
    And the sign out option should be visible in the navigation menu