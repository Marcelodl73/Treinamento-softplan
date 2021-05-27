// add_a_comment_to_an_article.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Adiciona um comentário a um artigo', () => {
  it('Adicionar um comentario a um artigo', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.login()

  //cy.get('.btn').click();
  cy.get('a[href="/editor"]').click();
  cy.get('input[placeholder="Article title"]').type('Artigo do Marcelo para comentar');
  cy.get('input[placeholder="What is this article about?"]').type('Desafio para incluir comentarário');
  cy.get('form textarea').type('Este artigo está sendo criado para incluir um comentário');
  cy.get('input[placeholder="Enter tags"]').type('artigo para comentar');
  cy.get('button.btn-primary').contains('Publish article').click();
  
  // Valida o título do artigo
  cy.get('h1').should('contains.text', 'Artigo do Marcelo para comentar');

  const coment = cy.get('form textarea').type('Adicionando um comentário para o desafio do treinamento de cypress');
  cy.get('button.btn-sm.btn-primary').contains('Post Comment').click(); 
  cy.get('.card-text').should('contain.text', 'coment')
     



  
  /* ==== End Cypress Studio ==== */
});
  
});

