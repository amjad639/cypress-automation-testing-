import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../POM/home-POM';
import productPage from '../POM/ProductPage-POM';
import checkOut from '../POM/CheckOut-POM';

const home = new homePage();
const product = new productPage();
const checkout = new checkOut();

Given('I navigate to the store website', () => {
  home.visitHomePage();
  home.verifyInHomePage();
});

When('the user selects an item {string}', (itemName) => {
  home.openProduct(itemName);
  product.verifyProduct(itemName);
});

When('adds it to the cart', () => {
  product.addToCart();
  product.verifyAddedToCart();
});

When('proceeds to checkout', () => {
  checkout.visitCheckOut();
});

Then('the cart page should be displayed', () => {
  checkout.verifyInCheckoutPage();
});