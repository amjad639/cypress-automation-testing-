import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import ForgetPasswordPOM from '../POM/ForgetPassword-POM';

const forget = new ForgetPasswordPOM();


When('I enter email {string}', (email) => {
  cy.get('#email').type(email);
});

When('I submit the forgot password form', () => {
  cy.get('[data-test="forgot-password-submit"]').click();
});