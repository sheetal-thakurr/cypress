/// <reference types="Cypress" />

describe("simple intercept testing api ", () => {
    beforeEach(() => {
        cy.visit("https://dummyapi.io/explorer")
    })


    it("test intercept api", () => {
        cy.intercept({
            path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
        }).as("comments")

        cy.get('.flex > :nth-child(5)').click();
        cy.wait("@comments").then(intercept => {
            expect(intercept.response.body.total).equal(2)
        })
    })

    it("test mock api", () => {

        cy.intercept("GET", "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10", { limit: 20, Name: "sheetal thakur" }).as("comments")
        cy.get('.flex > :nth-child(5)').click();
        cy.wait("@comments").then(inter => {
            expect(inter.response.body.limit).equal(20)
            expect(inter.response.body.Name).equal("sheetal thakur")
        })
    })

    it("data-driven api", () => {

        cy.intercept("GET", "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10", {fixture: "example.json"}).as("comments")
        cy.get('.flex > :nth-child(5)').click();
        cy.wait("@comments").then(inter => {
            // expect(inter.response.body.limit).equal(20)
            expect(inter.response.body.name).equal("cypress")
        })
    })

})