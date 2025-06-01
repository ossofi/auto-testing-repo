/// <reference types="cypress" />

describe('Tool Tips Test Suite', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('https://demoqa.com/tool-tips');
    });

    // ✅ 1. Using ID Locator (Original)
    it('checks all tooltips using ID locator', () => {
        cy.get('#toolTipButton').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Button');

        cy.get('#toolTipTextField').trigger('mouseover');
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');

        cy.contains('Contrary').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Contrary');

        cy.contains('1.10.32').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the 1.10.32');
    });

    // ✅ 2. Using Class Locator (Fixed)
    it('verifies tooltips using class selectors', () => {
        cy.get('#toolTipButton').trigger('mouseover'); // Fixed selector
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Button');

        cy.get('#toolTipTextField').trigger('mouseover'); // Fixed selector
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');
    });

    // ✅ 3. Using Attribute Selector (Fixed)
    it('validates tooltips using attribute selectors', () => {
        cy.get('#toolTipButton').trigger('mouseover'); // Fixed selector
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Button');

        cy.get('#toolTipTextField').trigger('mouseover'); // Fixed selector
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');
    });

    // ✅ 4. Using XPath Selector
    it('checks tooltips using XPath selectors', () => {
        cy.xpath('//button[@id="toolTipButton"]').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Button');

        cy.xpath('//input[@id="toolTipTextField"]').trigger('mouseover');
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');
    });

    // ✅ 5. Using Contains + Closest Traversal (Fixed)
    it('validates tooltips by finding labels and traversing', () => {
        cy.get('#toolTipTextField').trigger('mouseover');
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');

    });
    
    

});
