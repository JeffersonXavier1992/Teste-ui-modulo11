/// <reference types ="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {

    before(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })                
    });

it('Deve completar detalhes de conta com sucesso', () => {

    cy.detalhesConta('jefferson', 'xavier', 'Nill.QA')    
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});
    
});