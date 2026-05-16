import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../POM/home-POM';
import loginPOM from '../POM/login-POM';
import ForgetPasswordPOM from '../POM/ForgetPassword-POM';

const home = new homePage();
const log = new loginPOM();
const forget = new ForgetPasswordPOM();

// ========== Given ==========

Given('I navigate to the registration page', () => {
  cy.visit('https://practicesoftwaretesting.com/auth/register');
  cy.title().should('include', 'Register');
});

Given('I navigate to the login page', () => {
  log.visitLoginPage();
  log.verifyInLoginPage();
});

Given('I am logged in with email {string} and password {string}', (email, password) => {
  log.visitLoginPage();
  log.enterEmail(email);
  log.enterPassword(password);
  log.clickLogin();
  log.verifyLoginSuccess();
});

Given('I navigate to the forgot password page', () => {
  forget.forgetPasswordPage();
  forget.verifySuccessNav();
});

Given('I navigate to the contact page', () => {
  cy.visit('https://practicesoftwaretesting.com/contact');
  cy.title().should('include', 'Contact Us');
});

Given('I navigate to the home page', () => {
  home.visitHomePage();
  home.verifyInHomePage();
});

// ========== Then (all shared Then steps live ONLY here) ==========

Then('I should see {string}', (text) => {
  cy.contains(text).should('be.visible');
});

Then('I should see {string} in the results', (text) => {
  cy.contains(text).should('be.visible');
});

Then('I should see {string} in the cart', (productName) => {
  cy.contains(productName).should('be.visible');
});

Then('I should be redirected to the login page', () => {
  cy.title().should('include', 'Login');
  cy.contains('Login').should('be.visible');
});

Then('I should be logged in successfully', () => {
  log.verifyLoginSuccess();
});