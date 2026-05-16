class checkOut {
    verifyPaymentSuccess(){
        cy.contains('Payment was successful').should('be.visible');
    }
    verifyOrderSuccess(){
      cy.contains('Thanks for your order!').should('be.visible');  
    }
    proceedLogin() {
    cy.get('[data-test="proceed-1"]').click();
    }

    proceedBilling() {
        cy.get('[data-test="proceed-2"]').click();
    }

    proceedPayment() {
        cy.get('[data-test="proceed-3"]').click();
    }

    selectPayment(method) {
        cy.get('#payment-method').select(method);
    }

    finishOrder() {
        cy.get('[data-test="finish"]').click();
    }
    visitCheckOut(){
        cy.visit('https://practicesoftwaretesting.com/checkout');
    }
    verifyInCheckoutPage(){
        cy.title().should('include', 'Checkout - Practice Software Testing - Toolshop - v5.0');
    }
    }export default checkOut;