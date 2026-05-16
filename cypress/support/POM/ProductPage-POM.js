class productPage {
  addToCart() {
    cy.get('#btn-add-to-cart').click();
  }

  verifyAddedToCart() {
    cy.contains('Product added to shopping cart.').should('be.visible');
  }

  verifyOutOfStock() {
    cy.contains('Out of stock').should('be.visible');

    cy.get('#btn-add-to-cart').should('be.disabled');
    cy.get('#btn-decrease-quantity').should('be.disabled');
    cy.get('#btn-increase-quantity').should('be.disabled');
  }
  verifyProduct(product) {
    cy.contains(product).should('be.visible');
  }
  verifyInProductPage(product) {
    cy.title().should('include',product);
  }

}export default productPage;