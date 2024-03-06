/// <reference types="Cypress" />
describe("test", () => {
    //  all the products
    it("it should be not equal to empty", () => {
        cy.request('https://dummyjson.com/products').then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.empty; 
            expect(response.body).to.have.property('products'); 
                // cy.log("products-----------",JSON.stringify( response.body));
        })
    })

    // get single product data
    it("feching single products", ()=>{
        cy.request('https://dummyjson.com/products/1').then((response)=> {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title'); 
                cy.log("products-----------",JSON.stringify( response.body));
        })
    })
})
