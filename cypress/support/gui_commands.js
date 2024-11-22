Cypress.Commands.add('login', (
  user = Cypress.env('user'), // Obtém o valor configurado no cypress.config.js
  password = Cypress.env('password') // Obtém o valor configurado no cypress.config.js
) => {
  cy.visit('/app'); // Usa o `baseUrl` configurado no cypress.config.js

  // Preenche o campo de e-mail
  cy.get('#floatingInput')
    .should('be.visible')
    .clear() // Limpa o campo para garantir que não há valores residuais
    .type(user); // Preenche com o valor de `user`

  // Preenche o campo de senha
  cy.get('#floatingPassword')
    .should('be.visible')
    .clear()
    .type(password, { log: false }); // Preenche com o valor de `password`

  // Clica no botão de login
  cy.get('button.btn-primary').click();
});
