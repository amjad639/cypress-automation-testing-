import { When } from "@badeball/cypress-cucumber-preprocessor";
import registerInfoPOM from '../POM/registerInfoPOM';

const reg = new registerInfoPOM();

When('I fill in valid registration data', () => {
  reg.username('Amjad', 'Test');
  reg.DOB('2002-01-01');
  reg.locationInfo();
  reg.phoneNumber('5551234567');
  reg.email('amjad@gmail.com');
  reg.password('Aya.aya14');
});

When('I fill in registration data with invalid email {string}', (email) => {
  reg.username('Amjad', 'Test');
  reg.DOB('2002-01-01');
  reg.locationInfo();
  reg.phoneNumber('5551234567');
  reg.email(email);
  reg.password('Aya.aya14');
});

When('I fill in registration data with email {string}', (email) => {
  reg.username('Amjad', 'Test');
  reg.DOB('2002-01-01');
  reg.locationInfo();
  reg.phoneNumber('5551234567');
  reg.email(email);
  reg.password('Aya.aya14');
});

When('I fill in registration data with invalid date {string}', (date) => {
  reg.username('Amjad', 'Test');
  reg.DOB(date);
  reg.locationInfo();
  reg.phoneNumber('5551234567');
  reg.emailAndPassword();
});

When('I fill in registration data with invalid phone {string}', (phone) => {
  reg.username('Amjad', 'Test');
  reg.DOB('2002-01-01');
  reg.locationInfo();
  reg.phoneNumber(phone);
  reg.emailAndPassword();
});

When('I fill in registration data with invalid name {string}', (name) => {
  reg.username(name, name);
  reg.DOB('2002-01-01');
  reg.locationInfo();
  reg.phoneNumber('5551234567');
  reg.email('a@gmail.com');
  reg.password('Aya.aya14');
});

When('I fill in registration data with invalid password {string}', (password) => {
  reg.username('Amjad', 'Test');
  reg.DOB('2002-01-01');
  reg.locationInfo();
  reg.phoneNumber('5551234567');
  reg.email('aa@gmail.com');
  reg.password(password);
});

When('I submit the registration form', () => {
  reg.submitRegistration();
});