/// <reference types="cypress"/>

describe('Funcionalidade: produtos', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });    
        it('Deve selecionar um produto da lista', () => {
            cy.get(' .product-block ')
            .first()
            .click()    
        cy.wait(4000) 
        cy.screenshot()   

    });

    it('Deve selecionar o ultimo produto', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.get(' .product-block ')
            .contains('Arcadio Gym Short')     
            .click()
        cy.wait(4000)
        cy.screenshot() 

}); 
    it('Deve selecionar o ultimo produto', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    cy.get(' .product-block ')
         .last()    
        .click()
        cy.wait(4000)
        cy.screenshot() 
}); 
    it('Deve selecionar o ultimo produto', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    cy.get(' .product-block ')
        .eq(7)   
        .click()
        cy.wait(4000)
        cy.screenshot() 

}); 

});
