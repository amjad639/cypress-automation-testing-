import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPOM from '../POM/login-POM';

const log = new loginPOM();



When('I enter checkout login email {string} and password {string}', (email, password) => {
  log.enterEmail(email);
  log.enterPassword(password);
  cy.get('[data-test="login-submit"]').click();
});
When('I submit the login form', () => {
  log.clickLogin();
});

Then('I should be logged in successfully', () => {
  log.verifyLoginSuccess();
});