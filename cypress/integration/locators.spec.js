/// <reference types="cypress"/>

describe('teste', () =>{
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('using jquery selector', () => {
        cy.get('[onclick*=Francisco]')
        cy.get('table#tabelaUsuarios > tbody > tr:eq(0) >td:nth-child(3) > input').click()
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) input').type('teste')
    });
})