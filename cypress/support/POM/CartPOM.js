class cart{
    
    removeProduct(){
        cy.get('[data-icon="xmark"]').click();
    }
    verifyEmptyCart(){
        cy.contains('The cart is empty. Nothing to display').should('be.visible');
    }
    verifyQuantityError(){
         cy.contains('sorry you cannot add more than 999999999 product to the cart').should('be.visible');
    }
    verifyProductInCart(product) {
    cy.contains(product).should('be.visible');
  }
  verifyProductAddedSuccessfully (assertion) {
    cy.title().should('include', assertion);
  }
  verifyCartIsEmpty() {
    cy.contains('The cart is empty. Nothing to display').should('be.visible');
  }
  enterQuantity(quantity) {
    cy.get('[data-test="product-quantity"]').clear().type(quantity);
  }

        

}export default cart;