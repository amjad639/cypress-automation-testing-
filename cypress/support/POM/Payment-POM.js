class Payment {

clickProceedToLogin() {
    cy.get('[data-test="proceed-1"]').click();
  }

  clickProceedToBilling() {
    cy.get('[data-test="proceed-2"]').click();
  }

  clickProceedToPayment() {
    cy.get('[data-test="proceed-3"]').click();
  }

  verifyLoggedInMessage() {
    cy.contains(
      'you are already logged in. You can proceed to checkout.'
    ).should('be.visible');
  }

  verifySignInPage() {
    cy.contains('Sign in').should('be.visible');
  }

  verifyBillingAddressPage() {
    cy.contains('Billing Address').should('be.visible');
  }

  verifyPaymentPage() {
    cy.contains('Payment').should('be.visible');
  }

  selectPaymentMethod(method) {
    cy.get('#payment-method').select(method);
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click();
  }

  verifyPaymentSuccess() {
    cy.contains('Payment was successful')
      .should('be.visible');
  }

  verifyOrderSuccess() {
    cy.contains('Thanks for your order!')
      .should('be.visible');
  }
  enterHouseNumber(houseNumber) {
    cy.get('#house_number').type(houseNumber);
    }

}export default Payment;