beforeEach(() => {
    // Realiza o login antes de cada teste
    cy.login('wegnernando@gmail.com', 'nando123');
  });

  it('Deve realizar logout apos logar', () => {
  cy.get('.navbar-finalizar > .nav-link').click();
  cy.wait(2000)
  cy.get('.btn-danger-modal').click();
  cy.get('.w-100')
  .should('be.visible')
  .and('contain', 'Acessar');
  });