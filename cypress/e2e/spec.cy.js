import registerInfoPOM from '../support/POM/registerInfoPOM';
const reg = new registerInfoPOM();
import loginPOM from '../support/POM/login-POM';
const log = new loginPOM();
import ForgetPasswordPOM from '../support/POM/ForgetPassword-POM';
const forget = new ForgetPasswordPOM();
import ContactPage from '../support/POM/ContactPage-POM';
const contact = new ContactPage();
import searchPOM from '../support/POM/searchPOM';
const search = new searchPOM();
import CartPOM from '../support/POM/CartPOM';
const cart = new CartPOM();
import homePage from '../support/POM/home-POM';
const home = new homePage();
import checkOut from '../support/POM/CheckOut-POM';
const checkout = new checkOut();
import productPage from '../support/POM/ProductPage-POM';
const product = new productPage();
import Payment from '../support/POM/Payment-POM';
const payment = new Payment();


describe('registration', () => {
  let data;
    before(() => {
    cy.fixture('example').then((fixtureData) => {
      data = fixtureData;
    });
  });
   beforeEach(() => {
    cy.visit(data.registrationURL);
    cy.title().should('include', 'Register');
  });
    it('registration with valid data ', () => {
      reg.username();
      cy.dob().type('2002-01-01');
      reg.locationInfo();
      cy.phone().type('5551234567');
      cy.email().type('amjad@gmail.com');
      cy.password().type('Aya.aya14');
      cy.clickSubmit();
      cy.title().should('include', 'Login - Practice Software Testing - Toolshop - v5.0');
      cy.contains('Login').should('be.visible');

    });
    it('registration with invalid email address ', () => {
      reg.username();
      cy.dob().type('2002-01-01');
      reg.locationInfo();
      cy.phone().type('5551234567');
      cy.email().type('@gmail.amjad.com');
      cy.password().type('Aya.aya14');
      cy.clickSubmit();
      cy.contains('Email format is invalid').should('be.visible');
    });
    it('registration with empty fields ', () => {

      cy.clickSubmit();
      cy.contains('First name is required').should('be.visible');
      cy.contains('Last name is required').should('be.visible');
      cy.contains('Please enter a valid date in YYYY-MM-DD format.').should('be.visible');
      cy.contains('Street is required').should('be.visible');
      cy.contains('Postcode is required').should('be.visible');
      cy.contains('House number is required').should('be.visible');
      cy.contains('City is required').should('be.visible');
      cy.contains('State is required').should('be.visible');
      cy.contains('Country is required').should('be.visible');
      cy.contains('Phone is required').should('be.visible');
      cy.contains('Email is required').should('be.visible');
      cy.contains('Password is required').should('be.visible');

    });
    it('registration with already registered email address ', () => {

      reg.username();
      cy.dob().type('2002-01-01');
      reg.locationInfo();
      cy.phone().type('5551234567');
      cy.email().type('amjad@gmail.com');
      cy.password().type('Aya.aya14');
      cy.clickSubmit();
      cy.contains('A customer with this email address already exists.').should('be.visible');
    });
    it('registration with invalid date of birth format ', () => {
      reg.username();
      cy.dob().type('2212-34-10');
      reg.locationInfo();
      cy.phone().type('5551234567');
      reg.emailPassword();
      cy.clickSubmit();
      cy.contains('Please enter a valid date in YYYY-MM-DD format.').should('be.visible');
    });
    it('registration with invalid phone number format ', () => {

      reg.username();
      cy.dob().type('2002-01-01');
      reg.locationInfo();
      cy.phone().type('***********');
      reg.emailPassword();
      cy.clickSubmit();
      cy.contains('Only numbers are allowed.').should('be.visible');
    });
    it('registration with invalid first name and last name format ', () => {

      cy.firstName().type('*****');
      cy.lastName().type('*****');
      cy.dob().type('2002-01-01');
      reg.locationInfo();
      cy.phone().type('5551234567');
      cy.email().type('a@gmail.com');
      cy.password().type('Aya.aya14');
      cy.clickSubmit();
      cy.contains('First name format is invalid').should('be.visible');
      cy.contains('Last name format is invalid').should('be.visible');

    });
    it('registration with invalid password format ', () => {

      reg.username();
      cy.dob().type('2002-01-01');
      reg.locationInfo();
      cy.phone().type('5551234567');
      cy.email().type('aa@gmail.com');
      cy.password().type('password');
      cy.clickSubmit();
      cy.contains('Password must include invalid characters.').should('be.visible');
    });

  });

describe('login', () => {
  let data;
  beforeEach(() => {
    cy.fixture('example').then((fixtureData) => {
      data = fixtureData;
      cy.visit(data.loginURL);
      cy.title().should('include', 'Login');
    });
  });
  it('login with valid credentials ', () => {
    cy.login('amjad@gmail.com', 'Aya.aya14');
    log.submitLogin();
    log.verifyLoginSuccess();
  });
  it('login with invalid password ', () => {

    cy.login('amjad@gmail.com', 'InvalidPassword');
    log.submitLogin();
    log.verifyLoginError();
  });
  it('login with empty fields ', () => {
    log.submitLogin();
    log.verifyEmptyfiledsError();
  });
  it('login with invalid email format ', () => {

    cy.login('@gmail.com', 'Amgad.kaled14');
    log.submitLogin();
    log.verifyInvalidEmailFormat();

  });
  it('login with unregistered email ', () => {

    cy.login('pla.pla@gmail.com', 'Amgad.kaled14');
    log.submitLogin();
    cy.contains('Invalid email or password').should('be.visible');
  });
});
describe('logout', () => {
  it('logout ', () => {
    cy.visit('https://practicesoftwaretesting.com/auth/login');
    cy.title().should('include', 'Login - Practice Software Testing - Toolshop - v5.0');
    cy.email().type('amjad@gmail.com');
    cy.password().type('Aya.aya14');
    log.submitLogin();
    cy.contains('My account').should('be.visible');
    cy.get('#menu').click();
    cy.get('[data-test="nav-sign-out"]').click();
    cy.title().should('include', 'Login - Practice Software Testing - Toolshop - v5.0');
    cy.contains('Login').should('be.visible');
  });
});

describe('forgot password', () => {
  it('forget password ', () => {
    forget.forgetPasswordPage();
    forget.verifySuccessNav();
    cy.get('#email').type('aya.aya@gmail.com');
    cy.clickSubmit();
    forget.verifySuccessChange();
  });
});


describe('contact', () => {
  let data;

  beforeEach(() => {
    cy.fixture('example').then((fixtureData) => {
      data = fixtureData;
      cy.visit(data.contactUsURL);
      cy.title().should('include', 'Contact Us');

    });
  });

  it('contact us with valid data ', () => {

    contact.verifyContactPageNav();
    contact.fillContactForm();
    contact.attachFile();
    contact.submit();
    contact.verifySuccessSubmition();

  });

  it('contact us with empty fields ', () => {

    contact.verifyContactPageNav();
    contact.submit();
    contact. verifyRequiredFields();
    cy.title().should('include', 'Contact Us');
  });

  it('contact us with valid data and without attachment ', () => {
    contact.verifyContactPageNav();
    contact.fillContactForm();
    contact.submit();
    contact.verifySuccessSubmition();
  });

});
describe('search', () => {
  let data;
  beforeEach(() => {
    cy.fixture('example').then((fixtureData) => {
      data = fixtureData;
      cy.visit(data.homepageURL);
      cy.title().should('include', 'Practice Software Testing - Toolshop - v5.0');
    });
  });
  it('search for a product ', () => {

    search.searchForProduct();
    search.submitSearch();
    search.verifySearchResults();

  });
  it('search for a non-existing product ', () => {

    search.searchForNonExistingProduct();
    search.submitSearch();
    search.verifyNotExistingProduct();
  });
  it('search with numbers ', () => {

    search.searchWithNumbers();
    search.submitSearch(); 
    search.verifyNotExistingProduct();
  });

});
describe('cart', () => {
  it('add a product to the cart ', () => {
    home.visitHomePage();
    home.openProduct('Combination Pliers');
    product.verifyProduct('Combination Pliers');
    product.addToCart();
    product.verifyAddedToCart();
    checkout.visitCheckOut();
    cart.verifyProductInCart('Combination Pliers');
  });

  it('add a product out of stock to the cart ', () => {

    home.visitHomePage();
    home.verifyInHomePage();
    home.openOutOfStockProduct();
    product.verifyOutOfStock();
  });
  
  it('buy a product if user is logged in ', () => {
    log.visitLoginPage();
    log.verifyInLoginPage();
    log.enterEmail('amjad@gmail.com');
    log.enterPassword('Aya.aya14');
    log.clickLogin();
    log.verifyLoginSuccess();

    home.visitHomePage();
    home.verifyInHomePage();
    home.openProduct('Combination Pliers');

    product.verifyProduct('Combination Pliers');
    product.verifyInProductPage('Combination Pliers - Practice Software Testing - Toolshop - v5.0');
    product.addToCart();
    product.verifyAddedToCart();

    checkout.visitCheckOut();
    checkout.verifyInCheckoutPage();
    
    cart.verifyProductInCart('Combination Pliers');
    
      payment.clickProceedToLogin();
    payment.clickProceedToBilling();
    payment.enterHouseNumber('10');
    payment.verifyBillingAddressPage();
    payment.clickProceedToPayment();
    payment.verifyPaymentPage();
    payment.selectPaymentMethod('Cash on Delivery');
    payment.clickFinish();
    payment.verifyPaymentSuccess();
    payment.clickFinish();
    payment.verifyOrderSuccess();
  });
  it('buy a product if user is not logged in ', () => {
    home.visitHomePage();
    home.openProduct('Combination Pliers');
    product.verifyProduct('Combination Pliers');
    product.addToCart();
    product.verifyAddedToCart();
    checkout.visitCheckOut();
    checkout.verifyInCheckoutPage();
    payment.clickProceedToLogin();
    payment.verifySignInPage();
    log.enterEmail('amjad@gmail.com');
    log.enterPassword('Aya.aya14');
    cy.get('[data-test="login-submit"]').click();
    payment.verifyLoggedInMessage();
    payment.clickProceedToBilling();
    payment.verifyBillingAddressPage();
     payment.enterHouseNumber('10');
    payment.clickProceedToPayment();
    payment.verifyPaymentPage();
    payment.selectPaymentMethod('Cash on Delivery');
    payment.clickFinish();
    payment.verifyPaymentSuccess();
    payment.clickFinish();
    payment.verifyOrderSuccess();
  });
  it('remove a product from the cart ', () => {
    home.visitHomePage();
    home.verifyInHomePage();
    home.openProduct('Combination Pliers');
    product.addToCart();
    product.verifyAddedToCart();
    checkout.visitCheckOut();
    checkout.verifyInCheckoutPage();
    cart.verifyProductInCart('Combination Pliers');
    cart.removeProduct('Combination Pliers');
    cart.verifyCartIsEmpty();
  });
  it('check product quantity if they are more than available (should be failed)', () => {
    home.visitHomePage();
    home.verifyInHomePage();
    home.openProduct('Combination Pliers');
    product.addToCart();
    product.verifyAddedToCart();
    checkout.visitCheckOut();
    checkout.verifyInCheckoutPage();
    cart.verifyProductInCart('Combination Pliers');
    cart.enterQuantity('9999999999');
    cart.verifyQuantityError();
  });

});
