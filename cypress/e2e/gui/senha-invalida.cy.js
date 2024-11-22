it('password fails', () => {
  cy.login('wegnernando@gmail.com', 'senha-invalida');

  // Loga o HTML do body para inspecionar o DOM
  cy.get('body').then(($body) => {
    cy.log($body.html()); // Mostra o HTML completo no log do Cypress
  });

  // Tenta encontrar a mensagem de erro
  cy.get('.alert.alert-danger.mt-2', { timeout: 10000 })
    .should('be.visible')
    .and('contain', 'E-mail ou senha inválida.');
});
