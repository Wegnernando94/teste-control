beforeEach(() => {
    // Realiza o login antes de cada teste
    cy.login('wegnernando@gmail.com', 'nando123');
  });

  it('Deve realizar logout apos logar', () => {
    
    //interação botão finalizar
  cy.get('.navbar-finalizar > .nav-link').click();
  cy.wait(2000)

  //clicar enviar
  cy.get('.btn-primary-modal').click();

  //preencher meus dados
  cy.wait(2000)
  cy.get('#nome').type('Fernando Wegner');

  cy.wait(2000)
  cy.get('#telefone').type('41985066318');

  
  cy.get('#email')
  .clear()
  .type('wegnernando@gmail.com');

  cy.get('#githubLink').type ('https://github.com/Wegnernando94/teste-control.git');

  cy.get('#nomeRecrutador').type('Kely Garcia');

  cy.wait(2000)
  cy.get('.modal-buttons > .btn').click();

  cy.get('.alert', { timeout: 5000 })
  .should('be.visible') // Valida que o alerta está visível
  .and('contain', 'As informações foram registradas com sucesso!');
  

  });