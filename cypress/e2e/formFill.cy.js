/// <reference types="Cypress" />

 describe('fill form', () => {

    before(() => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    });
    it('fill a form with cypress', () => {
        cy.log('----------------------11')
        const name = 'Sheetal';
        const email = 'sheetal@gmail.com';
        const comment = 'hello everyone';
        const testing = 'Functional Testing';
        const education = 'Graduate';
        const experience = '0-1';

        cy.visit('https://www.globalsqa.com/samplepagetest/')

        // fill the form values
    //    for select by id we use "#" and select by class we use "."
        cy.get('#g2599-name').type(name)
        cy.get('#g2599-email').type(email)
        cy.get('#g2599-experienceinyears').type(experience);
        // cy.get('select').eq(0).select('0-1')
        cy.get('[type="checkbox"]').check(testing) 
        // cy.get('[class="grunion-field-wrap grunion-field-checkbox-multiple-wrap"] [type="checkbox"]').check(testing)
        cy.get('[type="radio"]').check(education)
        cy.get('#contact-form-comment-g2599-comment').type(comment)
        cy.get('button[type="submit"]').click()


        // validate the form values
        cy.get('.contact-form-submission').should('contain', name);
        cy.get('.contact-form-submission').should('contain', email);
        cy.get('.contact-form-submission').should('contain', experience);
        cy.get('.contact-form-submission').should('contain', testing);
        cy.get('.contact-form-submission').should('contain', education);
        cy.get('.contact-form-submission').should('contain', comment);

    })
}) 

