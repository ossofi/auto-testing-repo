/// <reference types="cypress" />

describe('DemoQA Select Menu Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/select-menu');
    });

    it('Selects an option from the old style select menu', () => {
        cy.get('#oldSelectMenu').select('Yellow').should('have.value', '3');
    });

    it('Selects a title from the single select dropdown', () => {
        cy.get('#selectOne').parent().find('div[class*="control"]').click();
        cy.contains('div[class*="option"]', 'Prof.').click();
        cy.get('#selectOne').parent().find('div[class*="singleValue"]').should('contain.text', 'Prof.');
    });

    it('Selects multiple values from the multi-select dropdown', () => {
        cy.get('#react-select-4-input').click({ force: true }).should('be.visible');
        cy.get('#react-select-4-input')
            .type('Green{enter}', { force: true })
            .type('Blue{enter}', { force: true });

        cy.wait(2000);
        cy.get('.css-12jo7m5').should('exist').and('contain', 'Green').and('contain', 'Blue');
    });

    it('Selects a color from the dropdown', () => {
        cy.visit('https://demoqa.com/select-menu');
    
        cy.get('#react-select-3-input').click({ force: true }).should('be.visible');
        cy.wait(500);
        cy.get('#react-select-3-input').type('Blue{enter}', { force: true });

        cy.wait(4000);
        cy.get('*').contains('Blue').should('exist'); 
        cy.get('*').each(($el) => {
            cy.log("Detected:", $el.text());
        });

    });
    
});
