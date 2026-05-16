class search{

searchForProduct(){
    cy.get('[data-test="search-query"]').type('combination ');
}
searchForNonExistingProduct(){
    cy.get('[data-test="search-query"]').type('candy');
}
submitSearch(){
    cy.get('[data-test="search-submit"]').click();
}
verifySearchResults(){
    cy.contains('Combination').should('be.visible');
}
searchWithNumbers(){
    cy.get('[data-test="search-query"]').type('12345');
}
verifyNotExistingProduct(){
    cy.contains('There are no products found.').should('be.visible');
}

}export default search;