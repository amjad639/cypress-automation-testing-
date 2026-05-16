class ForgetPasswordPOM {

    forgetPasswordPage(){
        cy.visit('https://practicesoftwaretesting.com/auth/forgot-password');
    }
    verifySuccessNav(){
        cy.title().should('include', 'Forgot Password - Practice Software Testing - Toolshop - v5.0');
    }
    verifySuccessChange(){
        cy.contains('Your password is successfully updated!').should('be.visible');
    }

}export default ForgetPasswordPOM;