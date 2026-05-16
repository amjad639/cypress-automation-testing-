class homePage {
  visitHomePage() {
    cy.visit('https://practicesoftwaretesting.com/');
  }
  openOutOfStockProduct() {
    cy.get('[data-test="out-of-stock"]').click();
  }
  searchProduct(product) {
    cy.get('[data-test="search-query"]').type(product);
    cy.get('[data-test="search-submit"]').click();
  }
  openProduct(product) {
    cy.contains(product).click();
  }
  verifyInHomePage() {
    cy.title().should('include', 'Practice Software Testing');
  }

}    
export default homePage;