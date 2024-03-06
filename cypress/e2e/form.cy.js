/// <reference types="Cypress" />
describe('form test', () => {
it('testing a form', () => {
    // Get the Form
    cy.visit('https://practice-automation.com/form-fields/')
    // cy.get('id="contact-form-1103"').should('be.visible')
    // cy.get('[data-test-id="contact-form-1103"]').should('be.visible')
    // cy.get('#contact-form-1103').should('be.visible')
    cy.get('#name').type('Sheetal')
    // cy.contains('Water').click()
    // cy.contains('Red').click()
    cy.get('#drink1').type('Water')
    cy.get('#color4').type('Green')

    cy.get('#email').type('sheetal@gmail.com')
    cy.get('#message').type('i am try to learn cypress')
    cy.get('#submit-btn').click()

    //  Fill the Form

    
    // Assert Form Details
  //   cy.get('.field-value').contains('Sheetal').should('be.visible');
  // cy.contains('Water').should('be.visible');
  // cy.contains('Green').should('be.visible');
  // cy.contains('sheetal@gmail.com').should('be.visible');
  // cy.contains('sheetal@gmail.com').should('be.visible');
  // cy.contains('i am try to learn cypress').should('be.visible');

})
})