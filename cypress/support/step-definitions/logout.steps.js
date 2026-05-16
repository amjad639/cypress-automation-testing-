import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I click on the menu', () => {
  cy.get('#menu').click();
});

When('I click sign out', () => {
  cy.get('[data-test="nav-sign-out"]').click();
});

Then('I should be redirected to the login page', () => {
  cy.title().should('include', 'Login');
  cy.contains('Login').should('be.visible');
});