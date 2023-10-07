/// <reference types="cypress"/>

describe('Work with basic elements', () =>{

   
    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('.facilAchar').should('contain', 'Cuidado onde clica, muitas armadilhas...')
        cy.get('span').should('contain', 'Cuidado onde clica, muitas armadilhas...')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    });

    it.only('Links', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()

        cy.get('#resultado').should('have.not.text', 'Voltou!')

        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    });

})