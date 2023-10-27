/// <reference types="cypress"/>



describe('Helpers', ()=>{

    it('Wrap', () => {
        
        const obj = {nome: 'User', idade: 20}

        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

       // cy.get('#formNome').type('Funciona?')

      // cy.get('#formNome').then($el =>{
       //     cy.wrap($el).type('Funciona via cypress')

     //  })

       const promise = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(10)
            }, 500)
       })

       cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botao'))
      // promise.then(num => console.log(num))
      cy.wrap(promise).then(ret => console.log(ret))
       cy.get('#buttonLazy').then(() => console.log('Encontrei o segundo botao'))
    });

})