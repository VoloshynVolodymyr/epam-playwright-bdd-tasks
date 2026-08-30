@ui @search
Feature: Product search

  Scenario: Search for an exact product by name
    Given I am on the home page
    When I search for the product "Bolt Cutters"
    Then the product "Bolt Cutters" should be visible in the search results