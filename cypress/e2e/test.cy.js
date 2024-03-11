/// <reference types="Cypress" />
describe("test", () => {
    //  all the products
    it("it should be not equal to empty", () => {
        cy.request('https://dummyjson.com/products').then((response) => {
            expect(response.status).to.eq(200);

            let result = response.body;
            expect(result).to.not.be.empty;
            expect(result).to.have.property('products');
            expect(result.products).to.be.an("array");
            // expect(Array.isArray(result.products)).to.eq(true);
            expect(result.products.forEach((product) => {
                expect(product).to.have.property('id')
                expect(product).to.have.property('title')
                expect(product).to.have.property('description')
                expect(product).to.have.property('price')
                expect(product).to.have.property('discountPercentage')
                expect(product).to.have.property('images');
                expect(product.images).to.be.an("array");

            }));
            expect(result).to.have.property('total')
            expect(result).to.have.property('skip');
            expect(result).to.have.property('limit');
            expect(result.total).to.equal(100);
            expect(result.limit).to.equal(30);
        })
    })

    // get single product data
    it("feching single products", () => {
        cy.request('https://dummyjson.com/products/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('images');
            expect(response.body.images).to.be.an("array");
        })
    })

    //  add product 
    it('add product data', () => {
        cy.request({
            method: 'POST',
            url: 'https://dummyjson.com/products/add',
            body: {
                title: 'BMW Pencil',
                description: "An apple mobile which is nothing like apple",
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: "Apple",
                category: "smartphones",
                thumbnail: "...",
            }
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.price).to.eq(549);
            });
    });

    //  update product data
    it('update product', () => {
        cy.request({
            method: 'PUT',
            url: 'https://dummyjson.com/products/1',
            body: {
                title: 'iPhone Galaxy +1'
            }
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.title).to.eq('iPhone Galaxy +1');
            });
    });

    //  delete product 
    it('delete product', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://dummyjson.com/products/1',
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.isDeleted).to.eq(true);
            });
    });
})
