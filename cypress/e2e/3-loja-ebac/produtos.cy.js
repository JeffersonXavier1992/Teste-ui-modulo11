/// <reference types="cypress"/>

describe('Funcionalidade: produtos', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

        it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(4)
            .contains('Arcadio Gym Short')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')    
        
    });
});