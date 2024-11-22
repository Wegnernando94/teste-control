beforeEach(() => {
    // Realiza o login antes de cada teste
    cy.login('wegnernando@gmail.com', 'nando123');
  });

  it('Deve validar os campos obrigatorios', () => {
    // Interage com o menu apos o login
    cy.get('[href="/app/editarcliente/VtIvF66hO7DINpSlkIOp"] > .fas').click();
    cy.wait(2000), // Pausa por 2 segundos
    cy.get(':nth-child(3) > #exampleInputEmail1') // Seleciona o campo
    .clear() // Limpa o valor atual
     cy.get('.btn-primary').click();
        
     //valida alerta dos campos obrigatorios
     cy.get('.alert', { timeout: 10000 })
     .should('be.visible')
     .and('contain', 'Informe o e-mail');


  });