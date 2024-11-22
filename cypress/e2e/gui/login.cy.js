describe('login', () =>{
    it('successfully', () =>{
        cy.login()

        cy.get('.container-fluid.titulo h1').should('be.visible')
    })

})