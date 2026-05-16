Feature: Automation test store website

  Scenario: Add an item to cart
    Given I navigate to the store website
    When the user selects an item "Combination Pliers"
    And adds it to the cart
    And proceeds to checkout
    Then the cart page should be displayed


