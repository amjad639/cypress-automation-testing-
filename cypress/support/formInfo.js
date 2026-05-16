Cypress.Commands.add('firstName', () => {
    cy.get('#first_name');
})
Cypress.Commands.add('lastName', () => {
    cy.get('#last_name');
})
Cypress.Commands.add('dob', () => {
    cy.get('#dob');
})
Cypress.Commands.add('street', () => {
    cy.get('#street');
}) 
Cypress.Commands.add('postalCode', () => {
    cy.get('#postal_code');
})
Cypress.Commands.add('city', () => {
    cy.get('#city');
}) 
Cypress.Commands.add('userState', () => {
    cy.get('#state');
})
Cypress.Commands.add('country', () => {
    cy.get('#country');
}) 
Cypress.Commands.add('phone', () => {
    cy.get('#phone');
})
Cypress.Commands.add('email', () => {
    cy.get('#email');
}) 
Cypress.Commands.add('password', () => {
    cy.get('#password');
})
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);

});
Cypress.Commands.add('clickSubmit', () => {
    cy.get('button[type="submit"]').click();
});
Cypress.Commands.add('loginSubmit', () => {
    cy.get('[data-test="login-submit"]').click();
});
Cypress.Commands.add('houseNumber', () => {
    cy.get('[data-test="house_number"]')
});
Cypress.Commands.add('fotgotPasswordButton', () => {
    cy.get('[data-test="forgot-password-submit"]').click();
});