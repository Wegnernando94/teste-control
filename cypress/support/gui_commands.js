Cypress.Commands.add('login', (
  user = Cypress.env('user'), 
  password = Cypress.env('password') 
) => {
  cy.visit('/app'); 

  
  cy.get('#floatingInput')
    .should('be.visible')
    .clear() 
    .type(user); 

  // Preenche o campo de senha
  cy.get('#floatingPassword')
    .should('be.visible')
    .clear()
    .type(password, { log: false }); 

    //botão confirmar
  cy.get('button.btn-primary').click();
});
