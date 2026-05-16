import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import ContactPage from '../POM/ContactPage-POM';

const contact = new ContactPage();



When('I fill in the contact form', () => {
  contact.fillContactForm();
});

When('I attach a file', () => {
  contact.attachFile();
});

When('I submit the contact form', () => {
  contact.submit();
});