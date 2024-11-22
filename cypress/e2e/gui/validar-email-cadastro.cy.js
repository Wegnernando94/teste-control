beforeEach(() => {
    // Realiza o login antes de cada teste
    cy.login('wegnernando@gmail.com', 'nando123');
  });

  it('Deve validar após realizar as alterações do email de cadastro', () => {
    // Interage com o menu após o login
    cy.get('[href="/app/editarcliente/VtIvF66hO7DINpSlkIOp"] > .fas').click();
    cy.wait(2000),


    cy.get(':nth-child(3) > #exampleInputEmail1') // Seleciona o campo
    .clear() // Limpa o valor atual
    .type('emailnovo.gmail.com@gmail.com'); // Insere o novo valor


    cy.get('.btn-primary').click();

    // Loga que o sistema está permitindo e-mails invalidos
    cy.log('O sistema permite cadastrar e-mails inválidos!');


  });