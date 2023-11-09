/// <reference types="cypress"/>

describe('Alerts', () =>{

    
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it.only('Alert', () => {
       cy.clickAlert('#alert', 'Alert Simples') 
       
    });

    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
        
    });

    it('Confirm', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })
    });

    it('Deny', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Negado')
        })
    });

    it('Prompt', () => {
        cy.window().then(win =>{
            cy.stub(win, 'prompt').returns('42')
        })

        cy.on('window:confirm', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg =>{
            console.log(msg)
            expect(msg).to.be.equal(':D')
        })

        cy.get('#prompt').click()
        
    });

});