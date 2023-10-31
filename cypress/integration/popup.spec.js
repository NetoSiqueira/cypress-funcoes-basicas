/// <reference types="cypress"/>

describe('Popup', () =>{

    
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })
    it.only('Deve testar popup diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        
        cy.get('#otherButton').click()
        cy.on('window:alert', msg =>{
                expect(msg).to.be.equal('Click OK!')
            })
    });

    it.only('Deve verificar se o popup foi invocado', () => {
        cy.window().then(win =>{
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    });

})
