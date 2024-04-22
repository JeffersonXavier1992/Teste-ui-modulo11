/// <reference types="cypress"/>


describe ('Funcionalidade: Login', () => {
    
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        cy.screenshot()
    });

    it ('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('jefferson.teste@teste.com.br')
        cy.get('#password').type('testando123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jefferson.teste (não é jefferson.teste? Sair)')
        });      
            
    it('Deve aparecer uma mensagem de erro usuário inválido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jefferson@teste.com.br')
        cy.get('#password').type('testando123')
        cy.get('.woocommerce-form > .button').click()   

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Deve aparecer uma mensagem de senha inválida', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jefferson.teste@teste.com.br')
        cy.get('#password').type('testando000')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail jefferson.teste@teste.com.br está incorreta. Perdeu a senha?')
        
    });

    })
