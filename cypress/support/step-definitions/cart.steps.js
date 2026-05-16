import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../POM/home-POM';
import productPage from '../POM/ProductPage-POM';
import checkOut from '../POM/CheckOut-POM';
import CartPOM from '../POM/CartPOM';
import loginPOM from '../POM/login-POM';
import Payment from '../POM/Payment-POM';

const home = new homePage();
const product = new productPage();
const checkout = new checkOut();
const cart = new CartPOM();
const log = new loginPOM();
const payment = new Payment();

// ==================== When ====================

When('I open product {string}', (productName) => {
  home.openProduct(productName);
  product.verifyProduct(productName);
});

When('I open an out of stock product', () => {
  home.openOutOfStockProduct();
});

When('I add it to the cart', () => {
  product.addToCart();
  product.verifyAddedToCart();
});

When('I go to checkout', () => {
  checkout.visitCheckOut();
  checkout.verifyInCheckoutPage();
});

When('I proceed to login step', () => {
  payment.clickProceedToLogin();   
});

When('I enter checkout login email {string} and password {string}', (email, password) => {
  log.enterEmail(email);
  log.enterPassword(password);
  cy.get('[data-test="login-submit"]').click();
});

When('I proceed to billing', () => {
  payment.clickProceedToBilling();  
});

When('I enter house number {string}', (number) => {
  payment.enterHouseNumber(number); 
});

When('I proceed to payment', () => {
  payment.clickProceedToPayment();  
});

When('I select payment method {string}', (method) => {
  payment.selectPaymentMethod(method); 
});

When('I click finish', () => {
  payment.clickFinish();            
});

When('I remove the product from the cart', () => {
  cart.removeProduct();             
});

When('I enter quantity {string}', (quantity) => {
  cart.enterQuantity(quantity);     
});

// ==================== Then ====================

Then('the cart should be empty', () => {
  cart.verifyCartIsEmpty();        
});

Then('the add to cart button should be disabled', () => {
  product.verifyOutOfStock();       
});