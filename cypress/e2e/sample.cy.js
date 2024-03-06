
/// <reference types="Cypress" /> 
describe('learning assertion', () => {

    it('implicit and explicit assertion', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('get').click()

        // implicit assertions

        // should=>
        // 1.  should-have
        // .should('have.class', 'query-btn')
        // have.text
        // have.html

        // 2. should-be
        // .should('be.visible') 
        // be.selected
        // be.disabled
        // be.focused

        // 3. should - contain
        // .should('contain', 'Button')


        cy.get('#query-btn')
            .should('contain', 'Button')
            .should('have.class', 'query-btn')
            .should('be.visible')
            .should('be.enabled')

        cy.get('#query-btn')
            .invoke('attr', 'id')
            .should('equal', 'query-btn')

        cy.get('#query-btn')
            .should('contain', 'Button')
            .and('have.class', 'query-btn')

        // explicit assertions
        // expect=>
        // to.not.equal()
        // to.be.a('string')
        // to.be.true
        // to.be.false
        // to.be.null
        // to.exist
        let name = "sheetal"
        expect(true).to.be.true
        expect(name).to.be.equal("sheetal")

        // assert=>
        // assert.equal
        // .notEqual
        // .true
        // .strictEqual
        // .false
        // .isAbove
        // .isString
        // .isBelow
        // .isNotString
        // .exists
        // .isNumber
        // .notExists
        // .isNotNumber

        assert.notEqual(5, 15, 'please show me the response')
       assert.strictEqual(5, "5", "both are same or not?")


        //   Should be on a new URL which 
        // includes /commands/actions'
        // cy.url().should('include', '/commands/actions')

        // Get an input, type into it
        // cy.get('.action-email').type('fake@email.com')

        //  Verify that the value has been updated
        // cy.get('.action-email').should('have.value', 'fake@email.com')
    })
})