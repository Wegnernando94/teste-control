beforeEach(() => {
    // Realiza o login antes de cada teste
    cy.login('wegnernando@gmail.com', 'nando123');
  });

  it('Deve procurar cliente atraves do search', () => {
    // Interage com o menu apos o login
    cy.get('input.form-control.inputSearch').type('Teste Cliente'); 


    cy.wait(2000);
    cy.get('#button-addon2').click();
    cy.get('.titleModal').should('be.visible');

  });