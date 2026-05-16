class registerInfoPOM {

username (){
      cy.firstName().type('amjad');
      cy.lastName().type('amjad');
}
locationInfo(){
      cy.street().type('123 Main St');
      cy.postalCode().type('12345');
      cy.houseNumber().type('10');
      cy.city().type('alexandria');
      cy.userState().type('egypt');
      cy.country().select('Egypt');
}
emailPassword(){
      cy.email().type('aaa@gmail.com');
      cy.password().type('Aya.aya14');
}
registerFixture(){
      cy.fixture('example').then((fixtureData) => {
      data = fixtureData;
    });
}
registerNav(){
    let data;
    cy.visit(data.registrationURL);
    cy.title().should('include', 'Register');
}
}export default registerInfoPOM;