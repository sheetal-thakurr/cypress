describe("google test", ()=>{
    it("google testing with cypress", ()=>{
        cy.visit("https://www.google.com")
        cy.get("#APjFqb").type("Modi {enter}");
        // cy.contains("Videos").click()
        cy.contains("Images").click()
        // cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    })

    it.only("login testing with cypress", ()=>{
        cy.visit(" https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-button--secondary').click()
        // cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').find()
        
    })

   
})