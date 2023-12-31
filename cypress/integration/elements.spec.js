/// <reference types="cypress"/>

describe('Work with basic elements', () =>{

    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

   
    it('Text', () => {
        cy.get('.facilAchar').should('contain', 'Cuidado onde clica, muitas armadilhas...')
        cy.get('span').should('contain', 'Cuidado onde clica, muitas armadilhas...')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    });

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()

        cy.get('#resultado').should('have.not.text', 'Voltou!')

        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    });

    it.only('TextFields', () => {
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')
      
        cy.get('#elementosForm\\:sugestoes')
        .type('textarea')
        .should('have.value', 'textarea')
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('???')
       
        cy.get('[data-cy=dataSobrenome]')
        .type('teste123{backspace}')
        .should('have.value', 'teste12')

        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto', {delay:100})
        .should('have.value', 'acerto')

    })

    it.only('RadioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

        cy.get('#formSexoMasc')
        .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    });

    it.only('Checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]')
        .click({multiple:true})
        
        cy.get('#formComidaPizza')
        .should('not.be.checked')

        cy.get('#formComidaCarne')
        .should('be.checked')
    });

    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
        .select('2graucomp') //Combo normal pode ser passado o nome, como Value
        .should('have.value', '2graucomp')
    });

    it.only('Combo multiple', () => {
        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida']) //Combo multiplo precisa olhar pelo value
    });
})