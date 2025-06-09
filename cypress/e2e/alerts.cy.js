/// <reference types="cypress" />
import AlertsPage from '../pages/AlertsPage';

describe('Alerts testing', () => {
  const alertsPage = new AlertsPage();

  beforeEach(() => {
    cy.visit('https://demoqa.com/alerts', { timeout: 120000 });
    Cypress.on('uncaught:exception', (err) => {
      console.log("Uncaught error:", err.message);
      return false;
    });
  });

  it('handles alert with OK button', () => {
    alertsPage.clickAlertButton();
    alertsPage.verifyAlertText('You clicked a button');
  });

  it('handles delayed alert', () => {
    alertsPage.clickDelayedAlert();
    alertsPage.verifyAlertText('This alert appeared after 5 seconds');
  });

  it('handles confirm alert - OK', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(true);
    });
    alertsPage.clickConfirmButton();
    cy.get('#confirmResult').should('contain', 'You selected Ok');
  });

  it('handles confirm alert - Cancel', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(false);
    });
    alertsPage.clickConfirmButton();
    cy.get('#confirmResult').should('contain', 'You selected Cancel');
  });

  it('handles prompt alert', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Cypress Test');
    });
    alertsPage.clickPromptButton();
    cy.get('#promptResult').should('contain', 'Cypress Test');
  });
});
