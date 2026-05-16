import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPOM from '../POM/login-POM';

const log = new loginPOM();



When('I login with email {string} and password {string}', (email, password) => {
  log.enterEmail(email);
  log.enterPassword(password);
  log.clickLogin();
});

When('I submit the login form', () => {
  log.clickLogin();
});

Then('I should be logged in successfully', () => {
  log.verifyLoginSuccess();
});