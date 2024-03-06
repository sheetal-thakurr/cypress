
describe('template spec', () => {
  // hooks 
  // beforeEach() before running the every test , so we do not need to write cy.visit in every test
  beforeEach(() => {
    cy.visit('https://example.com');
  })

  // afterEach() after running the every test
  afterEach(()=>{
    cy.log('this will run after each test')
  })
  it('Assert Url', () => {
    // cy.visit('https://example.com');
    cy.url().should('contain', 'example.com')
  })

  it('Assert title', ()=>{
    cy.title().should('contain', 'Example Domain')
  })

  // it.only run only particular test
  it('Assert Element',()=> {
    cy.get('h1').should('be.visible')
    cy.get('p').should('be.visible')
    // cy.wait(2000)
    cy.get('div').should('be.visible')
  })

  // it.skip skip the particular test
  it.skip('Reload and Log', ()=>  {
    cy.log('Before the Reload')
    cy.reload()
    cy.log('After the Reload')


  })

})