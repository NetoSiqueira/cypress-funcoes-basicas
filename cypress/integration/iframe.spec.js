/// <reference types="cypress"/>

describe('Iframe', () =>{

    
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('Iframe', () => {
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('test')
            .should('have.value', 'test')
        
        cy.on('window:alert', msg =>{
                expect(msg).to.be.equal('Alert Simples')
            })
        cy.wrap(body).find('#otherButton').click()    
        
            
        })
    });

    it.only('Deve testar Iframe diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        
        cy.get('#otherButton').click()
        cy.on('window:alert', msg =>{
                expect(msg).to.be.equal('Click OK!')
            })
    });
})
