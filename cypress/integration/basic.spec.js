/// <reference types="cypress"/>

describe('Cypress Basic',() =>{

    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

      // const title = cy.title();
       //console.log(title);

       cy.title()
       .should('be.equal', 'Campo de Treinamento')
       .should('contain', 'Campo')

       cy.title()
       .should('be.equal', 'Campo de Treinamento')
       .and('contain', 'Campo')

       cy.title().then(title =>{
            console.log(title)
       })

       let syncTitle

       cy.title().then(title =>{
        console.log(title)
        cy.get('#formNome').type(title)

        syncTitle = title
        cy.get('[data-cy=dataSobrenome]').type(syncTitle)
   })

    });

    it('should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
        
    });

})