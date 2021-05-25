// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
  it('criar um novo artigo', function() {
    /* ==== Generated with Cypress Studio ==== */
        cy.login()

        cy.get('a[href$=editor]').click();
        cy.get('input[placeholder="Article title"]').clear();
        cy.get('input[placeholder="Article title"]').type('Avengers Endgame');
        cy.get('input[placeholder="What is this article about?"]').clear();
        cy.get('input[placeholder="What is this article about?"]').type('avengers movie');
        cy.get('form textarea').type('Avengers is a great movie');
        cy.get('input[placeholder="Enter tags"]').clear();
        cy.get('input[placeholder="Enter tags"]').type('avengers');
        cy.get('button.btn-primary').contains('Publish article').click();


        cy.get('h1').should('contain.text', 'Avengers Endgame')

        // deve conter o texto igual ao título informado
    /* ==== End Cypress Studio ==== */
  });
  
});

