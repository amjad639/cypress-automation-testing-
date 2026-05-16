import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../POM/home-POM';

const home = new homePage();



When('I search for {string}', (query) => {
  cy.get('[data-test="search-query"]').type(query);
  cy.get('[data-test="search-submit"]').click();
});

Then('I should see {string} in the results', (text) => {
  cy.contains(text).should('be.visible');
});