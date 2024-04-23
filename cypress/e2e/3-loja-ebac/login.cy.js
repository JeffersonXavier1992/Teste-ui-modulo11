/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')


describe ('Funcionalidade: Login', () => {
    
    before(() => {
        cy.visit('minha-conta')

    });

    it ('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('jefferson.teste@teste.com.br')
        cy.get('#password').type('testando123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jefferson.teste (não é jefferson.teste? Sair)')
        });      
            
    it('Deve aparecer uma mensagem de erro usuário inválido', () => {

        cy.visit('minha-conta')
        cy.get('#username').type('jefferson@teste.com.br')
        cy.get('#password').type('testando123')
        cy.get('.woocommerce-form > .button').click()   

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Deve aparecer uma mensagem de senha inválida', () => {

        cy.visit('minha-conta')
        cy.get('#username').type('jefferson.teste@teste.com.br')
        cy.get('#password').type('testando000')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail jefferson.teste@teste.com.br está incorreta. Perdeu a senha?')
        
    })

    it('Deve fazer login com sucesso - usando massa de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jefferson.teste (não é jefferson.teste? Sair)')
        
    });

    it('Deve fazer login com sucesso - usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jefferson.teste (não é jefferson.teste? Sair)')
         })
        
    });

    it.only('Deve fazer login - comando customizados', () => {
        cy.login('jefferson.teste@teste.com.br' , 'testando123') 
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jefferson.teste (não é jefferson.teste? Sair)')
    });

    })
