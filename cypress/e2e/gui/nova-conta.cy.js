describe('Cadastro de Nova Conta', () => {
    it('Deve criar uma nova conta com sucesso e redirecionar para a tela de login', () => {
      // Acessa a pg de cadastro
      cy.visit('/app');
      cy.get('[href="/app/novaconta"]').click();
  
      // Preenche o campo de email
      cy.get('#floatingInput').type('teste@primo.com');
  
      // Preenche o campo de senha
      cy.get('#floatingPassword').type('senha1234');
  
      // Clica no btn "Criar Conta"
      cy.get('.w-100').click();
  
      // Verifica se o texto "login" estiver visivel na proxima tela
      cy.get('button.btn-primary')
      .should('be.visible')
      .and('contain', 'Acessar'); 
    });
  });
  