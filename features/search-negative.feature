@ui @search
Feature: Product search - no results

  Scenario: Search for a product that does not exist
    Given I am on the home page
    When I search for the product "NonexistentProductXYZ"
    Then no products should be visible in the search results