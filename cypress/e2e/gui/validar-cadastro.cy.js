describe('Cadastro de Nova Conta', () => {
    it('Deve validar o cadastro', () => {
      // Acessa a página de cadastro
      cy.visit('/app');
      cy.get('[href="/app/novaconta"]').click();
  
      // Preenche o campo de email
      cy.get('#floatingInput').type('teste@primi.com');
  
      // Preenche o campo de senha
      cy.get('#floatingPassword').type('senha1234');
  
      // Clica no botão "Criar Conta"
      cy.get('.w-100').click();
  
      cy.get('.alert', {timeout: 10000})
      .should('be.visible')
      .and('contain','Esse email já está em uso por outra conta');
    });
  });
  



