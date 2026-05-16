class loginPOM {
verifyLoginSuccess() {
    cy.title().should('include', 'Overview - Practice Software Testing - Toolshop - v5.0');
    cy.contains('My account').should('be.visible');
}
verifyLoginError() {
    cy.contains('Invalid email or password').should('be.visible');
}
verifyEmptyfiledsError() {
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
}
verifyInvalidEmailFormat(){
    cy.contains('Email format is invalid').should('be.visible');
}
submitLogin(){
    cy.loginSubmit();
}
visitLoginPage(){
    cy.visit('https://practicesoftwaretesting.com/auth/login');
}
enterEmail(email) {
    cy.email().type(email);
  }

enterPassword(password) {
    cy.password().type(password);
  }
clickLogin() {
    cy.get('[type="submit"]').click();
  }

verifyInLoginPage() {
    cy.title().should('include', 'Login - Practice Software Testing - Toolshop - v5.0');
  }

}
export default loginPOM;
