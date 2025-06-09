/// <reference types="cypress" />

describe('Tool Tips Test Suite', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('https://demoqa.com/tool-tips');
    });

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

    it('verifies tooltips using class selectors', () => {
        cy.get('#toolTipButton').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Button');

        cy.get('#toolTipTextField').trigger('mouseover');
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');
    });

    it('validates tooltips using attribute selectors', () => {
        cy.get('#toolTipButton').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Button');

        cy.get('#toolTipTextField').trigger('mouseover');
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');
    });

    it('checks tooltips using XPath selectors', () => {
        cy.xpath('//button[@id="toolTipButton"]').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'You hovered over the Button');

        cy.xpath('//input[@id="toolTipTextField"]').trigger('mouseover');
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');
    });

    it('validates tooltips by finding labels and traversing', () => {
        cy.get('#toolTipTextField').trigger('mouseover');
        cy.get('.tooltip-inner').last().should('be.visible').and('contain.text', 'You hovered over the text field');
    });
});
