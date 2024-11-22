beforeEach(() => {
    cy.login('wegnernando@gmail.com', 'nando123');
  });

  it('Deve realizar alteração do cadastro de clientes', () => {
    // Interage com o menu apos o login
    cy.get('[href="/app/editarcliente/VtIvF66hO7DINpSlkIOp"] > .fas').click();
    cy.get(':nth-child(2) > #exampleInputEmail1')
    .clear() 
     .type('Cliente novo');
     cy.get('.btn-primary').click();
     cy.get('h1').should('be.visible');


  });