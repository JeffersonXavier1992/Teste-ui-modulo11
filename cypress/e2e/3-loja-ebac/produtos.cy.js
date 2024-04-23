/// <reference types="cypress"/>

describe('Funcionalidade: produtos', () => {

    before(() => {
        cy.visit('produtos')
    });    
        it('Deve selecionar o primeiro produto da lista', () => {
            cy.get(' .product-block ')
            .first()
            .click()    
        cy.wait(4000) 
         
    });

    it('Deve selecionar o produto que contem o nome', () => {
        cy.visit('produtos')
        cy.get(' .product-block ')
            .contains('Arcadio Gym Short')     
            .click()
        cy.wait(4000)      

}); 
    it('Deve selecionar o ultimo produto', () => {
    cy.visit('produtos')
    cy.get(' .product-block ')
         .last()    
        .click()
        cy.wait(4000)        
}); 
    it('Deve selecionar o produto do múmero selecionado', () => {
    cy.visit('produtos')
    cy.get(' .product-block ')
        .eq(7)   
        .click()
        cy.wait(4000)  
        
}); 

});
