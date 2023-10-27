/// <reference types="cypress"/>

describe('Esperas', () =>{

    
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('Deve aguardar elemento', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    });

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
        //.should('not.exist')
        .should('exist')
        
    });

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista>li')
        .find('span')
        .should('contain', 'Item 1')

        cy.get('#buttonList').click()
        cy.get('#lista>li>span')
        .should('contain', 'Item 2')
        
    });
    
    it('Uso do timeout', () => {
       // cy.get('#buttonDelay').click()
       // cy.get('#novoCampo', {timeout:3000}).should('exist')
      // cy.get('#novoCampo').should('exist')
      cy.get('#buttonList').click()
      //cy.wait(5000)
      cy.get('#lista>li>span', {timeout:30000})
        .should('have.length', 2)
    });
    it.only('Click retry', () => {
        cy.get('#buttonCount')
        .click()
        .click()
        .should('have.value', '111')
    });

    it.only('Should vs then', () => {
        cy.get('#buttonList').click() 
        //cy.wait(5000)
        cy.get('#lista>li>span').then($el => {
           // console.log($el)
            expect($el).to.have.length(1)
        })
        //.should('have.length', 1)
    });
})