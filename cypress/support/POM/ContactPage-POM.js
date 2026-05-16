class ContactPage {
  verifyRequiredFields() {
    cy.contains('First name is required').should('be.visible');
    cy.contains('Last name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Subject is required').should('be.visible');
    cy.contains('Message is required').should('be.visible');
  }


verifyContactPageNav(){  
  cy.contains('Contact').should('be.visible');
}

fillContactForm(){
    cy.firstName().type('amjad');
    cy.lastName().type('amjad');
    cy.email().type('amjad.amjad@gmail.com');
    cy.get('#subject').select('Customer service')
    cy.get('#message').type('Hello, I am experiencing an issue with my order delivery as it has been significantly delayed and I have not received any updates regarding its current status or expected arrival time.'); 
    
}

attachFile(){
  cy.get('#attachment').selectFile('cypress/fixtures/empty.txt');
}

verifySuccessSubmition(){
  cy.contains('Thanks for your message! We will contact you shortly.').should('be.visible');
}

submit(){
  cy.get('[data-test="contact-submit"]').click();
}

}export default ContactPage;    