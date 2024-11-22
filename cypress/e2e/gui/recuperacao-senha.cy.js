describe('Cadastro de Nova Conta', () => {
  it('Deve realizar recuperação de senha', () => {
    cy.visit('https://challenge.primecontrol.com.br/app');
    cy.get('[href="/app/resetsenha"]').click();

    //preenchimento do email
    cy.get('#floatingInput').type('wegnernando@gmail.com');
    cy.wait(2000)

    //envio da recuperação de senha
    cy.get('.w-100').click();

    //confirmação do envio
    cy.get('.alert', { timeout: 10000 })
    .should('be.visible')
    .and('contain', 'Email enviado com sucesso');
  });
});