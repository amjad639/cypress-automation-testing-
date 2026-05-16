class registerInfoPOM {

username (FName, LName){
      cy.firstName().type(FName);
      cy.lastName().type(LName);
}
locationInfo(){
      cy.street().type('123 Main St');
      cy.postalCode().type('12345');
      cy.houseNumber().type('10');
      cy.city().type('alexandria');
      cy.userState().type('egypt');
      cy.country().select('Egypt');
}
emailAndPassword(){
      cy.email().type('aaa@gmail.com');
      cy.password().type('Aya.aya14');
}
email(email){
      cy.email().type(email);
}
password(password){
      cy.password().type(password);
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
visitRegisterPage(){
      cy.visit('https://practicesoftwaretesting.com/auth/register');
}
DOB(dob){
      cy.dob().type(dob);
}
phoneNumber(phone){
      cy.phone().type(phone);
}
verifySuccessNavToLogin(){
      cy.title().should('include', 'Login - Practice Software Testing - Toolshop - v5.0');     
}
verifyInLoginPage() {
      cy.title().should('include', 'Login - Practice Software Testing - Toolshop - v5.0');
}
submitRegistration(){
      cy.clickSubmit();
}
}export default registerInfoPOM;