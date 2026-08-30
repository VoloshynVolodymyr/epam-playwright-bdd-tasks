@ui @categories
Feature: Product categories

  Scenario: Browse products by main category
    Given I am on the home page
    When I select the "Power tools" category from the navigation menu
    Then the page title should display "Power Tools"
    And the product list should not be empty