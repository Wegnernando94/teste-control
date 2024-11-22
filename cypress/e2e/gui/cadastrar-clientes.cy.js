describe('Teste de Cadastro de Clientes', () => {
    beforeEach(() => {
      // Realiza o login antes de cada teste
      cy.login('wegnernando@gmail.com', 'nando123');
    });
  
    it('Deve acessar a página de cadastro, preencher o formulário e enviar uma imagem', () => {
      // Interage com o menu após o login
      cy.get(':nth-child(2) > .nav-link').click();
  
      // Preenche o nome completo
      cy.get('.col-md-9 > .form-control').type('Mauricio Fernandes');
  
      // Clica no botão de adicionar imagem
      cy.get('.add-image-button').click();
  
      // Envia a imagem
      cy.get('input[type="file"]').attachFile('imagem.png');

      //registrar telefone
      cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').type('4191919191');

      //registrar email
      cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type('teste@prime.com.br');

      //registrar cep
      cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type('81010031');

      //registrar numero residencial
      cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').type('8180');

      //registrar endereço
      cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type('Avenida das americas');

      //registrar complemento
      cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control').type('2');

      //setar país
      cy.get(':nth-child(3) > .form-control').select('br');

      //selecionar genero
      cy.contains('label', 'Masculino').click();

      //selecionar ferramentas
      cy.contains('label','Cypress').click();

      //salvar
      cy.get(':nth-child(7) > .btn').click();




    });







  });
  