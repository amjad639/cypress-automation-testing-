Feature: Automation test store website

  # ==================== Registration ====================

  Scenario: Registration with valid data
    Given I navigate to the registration page
    When I fill in valid registration data
    And I submit the registration form
    Then I should be redirected to the login page

  Scenario: Registration with invalid email
    Given I navigate to the registration page
    When I fill in registration data with invalid email "@gmail.amjad.com"
    And I submit the registration form
    Then I should see "Email format is invalid"

  Scenario: Registration with empty fields
    Given I navigate to the registration page
    When I submit the registration form
    Then I should see "First name is required"
    And I should see "Last name is required"
    And I should see "Email is required"
    And I should see "Password is required"

  Scenario: Registration with already registered email
    Given I navigate to the registration page
    When I fill in registration data with email "amjad@gmail.com"
    And I submit the registration form
    Then I should see "A customer with this email address already exists."

  Scenario: Registration with invalid date of birth
    Given I navigate to the registration page
    When I fill in registration data with invalid date "2212-34-10"
    And I submit the registration form
    Then I should see "Please enter a valid date in YYYY-MM-DD format."

  Scenario: Registration with invalid phone number
    Given I navigate to the registration page
    When I fill in registration data with invalid phone "***********"
    And I submit the registration form
    Then I should see "Only numbers are allowed."

  Scenario: Registration with invalid name format
    Given I navigate to the registration page
    When I fill in registration data with invalid name "*****"
    And I submit the registration form
    Then I should see "First name format is invalid"
    And I should see "Last name format is invalid"

  Scenario: Registration with invalid password format
    Given I navigate to the registration page
    When I fill in registration data with invalid password "password"
    And I submit the registration form
    Then I should see "Password must include invalid characters."

  # ==================== Login ====================

  Scenario: Login with valid credentials
    Given I navigate to the login page
    When I login with email "amjad@gmail.com" and password "Aya.aya14"
    Then I should be logged in successfully

  Scenario: Login with invalid password
    Given I navigate to the login page
    When I login with email "amjad@gmail.com" and password "InvalidPassword"
    Then I should see "Invalid email or password"

  Scenario: Login with empty fields
    Given I navigate to the login page
    When I submit the login form
    Then I should see "Email is required"
    And I should see "Password is required"

  Scenario: Login with invalid email format
    Given I navigate to the login page
    When I login with email "@gmail.com" and password "Amgad.kaled14"
    Then I should see "Email format is invalid"

  Scenario: Login with unregistered email
    Given I navigate to the login page
    When I login with email "pla.pla@gmail.com" and password "Amgad.kaled14"
    Then I should see "Invalid email or password"

  # ==================== Logout ====================

  Scenario: Logout successfully
    Given I am logged in with email "amjad@gmail.com" and password "Aya.aya14"
    When I click on the menu
    And I click sign out
    Then I should be redirected to the login page

  # ==================== Forgot Password ====================

  Scenario: Forgot password
    Given I navigate to the forgot password page
    When I enter email "aya.aya@gmail.com"
    And I submit the forgot password form
    Then I should see "Your password is successfully updated!"

  # ==================== Contact ====================

  Scenario: Contact us with valid data and attachment
    Given I navigate to the contact page
    When I fill in the contact form
    And I attach a file
    And I submit the contact form
    Then I should see "Thanks for your message! We will contact you shortly."

  Scenario: Contact us with empty fields
    Given I navigate to the contact page
    When I submit the contact form
    Then I should see "First name is required"
    And I should see "Last name is required"
    And I should see "Email is required"
    And I should see "Subject is required"
    And I should see "Message is required"

  Scenario: Contact us without attachment
    Given I navigate to the contact page
    When I fill in the contact form
    And I submit the contact form
    Then I should see "Thanks for your message! We will contact you shortly."

  # ==================== Search ====================

  Scenario: Search for existing product
    Given I navigate to the home page
    When I search for "combination"
    Then I should see "Combination" in the results

  Scenario: Search for non-existing product
    Given I navigate to the home page
    When I search for "candy"
    Then I should see "There are no products found."

  Scenario: Search with numbers
    Given I navigate to the home page
    When I search for "12345"
    Then I should see "There are no products found."

  # ==================== Cart ====================

  Scenario: Add a product to the cart
    Given I navigate to the home page
    When I open product "Combination Pliers"
    And I add it to the cart
    And I go to checkout
    Then I should see "Combination Pliers" in the cart

  Scenario: Add out of stock product to the cart
    Given I navigate to the home page
    When I open an out of stock product
    Then I should see "Out of stock"
    And the add to cart button should be disabled

  Scenario: Buy a product when logged in
    Given I am logged in with email "amjad@gmail.com" and password "Aya.aya14"
    When I open product "Combination Pliers"
    And I add it to the cart
    And I go to checkout
    And I proceed to billing
    And I enter house number "10"
    And I proceed to payment
    And I select payment method "Cash on Delivery"
    And I click finish
    Then I should see "Payment was successful"
    And I should see "Thanks for your order!"

  Scenario: Buy a product when not logged in
    Given I navigate to the home page
    When I open product "Combination Pliers"
    And I add it to the cart
    And I go to checkout
    And I proceed to login step
    And I enter checkout login email "amjad@gmail.com" and password "Aya.aya14"
    And I proceed to billing
    And I enter house number "10"
    And I proceed to payment
    And I select payment method "Cash on Delivery"
    And I click finish
    Then I should see "Payment was successful"
    And I should see "Thanks for your order!"

  Scenario: Remove a product from the cart
    Given I navigate to the home page
    When I open product "Combination Pliers"
    And I add it to the cart
    And I go to checkout
    And I remove the product from the cart
    Then the cart should be empty

  Scenario: Check product quantity more than available
    Given I navigate to the home page
    When I open product "Combination Pliers"
    And I add it to the cart
    And I go to checkout
    And I enter quantity "9999999999"
    Then I should see "sorry you cannot add more than 999999999 product to the cart"


