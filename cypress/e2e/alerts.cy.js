/// <reference types="cypress" />

describe('Alerts testing', () => {

    beforeEach(() => {
      cy.visit('https://demoqa.com/alerts');
  
      Cypress.on('uncaught:exception', () => false);
    });
  
    it('handles alert with OK button', () => {
      cy.get('#alertButton').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('You clicked a button');
      });
    });
  
    it('handles delayed alert', () => {
      cy.get('#timerAlertButton').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('This alert appeared after 5 seconds');
      });
    });
  
    it('handles confirm alert - OK', () => {
      cy.window().then((win) => {
        cy.stub(win, 'confirm').returns(true);
      });
      cy.get('#confirmButton').click();
      cy.get('#confirmResult').should('contain', 'You selected Ok');
    });
  
    it('handles confirm alert - Cancel', () => {
      cy.window().then((win) => {
        cy.stub(win, 'confirm').returns(false);
      });
      cy.get('#confirmButton').click();
      cy.get('#confirmResult').should('contain', 'You selected Cancel');
    });
  
    it('handles prompt alert', () => {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Cypress Test');
      });
      cy.get('#promtButton').click();
      cy.get('#promptResult').should('contain', 'Cypress Test');
    });
    
  });
  