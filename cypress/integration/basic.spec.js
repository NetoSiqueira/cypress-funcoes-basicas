/// <reference types="cypress"/>

describe('Cypress Basic',() =>{

    it('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

      // const title = cy.title();
       //console.log(title);

       cy.title()
       .should('be.equal', 'Campo de Treinamento')
       .should('contain', 'Campo')

       cy.title()
       .should('be.equal', 'Campo de Treinamento')
       .and('contain', 'Campo')


    });

})