/// <reference types="cypress" />

describe('DEMOQA Practice Form - Diverse Locator Strategies', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Submits form using ID and attribute selectors', () => {
      cy.get('#firstName').type('Alice');
      cy.get('[id="lastName"]').type('Smith');
      cy.get('#userEmail').type('alice.smith@example.com');
      cy.get('input[name="gender"][value="Female"]').check({ force: true });
      cy.get('#userNumber').type('1234567890');
      cy.get('#submit').click();
    });
  
    it('Submits form using class and contains selectors', () => {
      cy.get('.practice-form-wrapper input#firstName').type('Bob');
      cy.get('.practice-form-wrapper input#lastName').type('Johnson');
      cy.get('.practice-form-wrapper input#userEmail').type('bob.johnson@example.com');
      cy.contains('label', 'Male').click();
      cy.get('input#userNumber').type('0987654321');
      cy.contains('button', 'Submit').click();
    });
  
    it('Submits form using a mix of strategies', () => {
      cy.get('input[id="firstName"]').type('Charlie');
      cy.get('input[id="lastName"]').type('Brown');
      cy.get('[placeholder="name@example.com"]').type('charlie.brown@example.com');
      cy.get('input[type="radio"][value="Other"]').check({ force: true });
      cy.get('input#userNumber').type('1122334455');
      cy.get('button#submit').click();
    });
  
    it('Submits form with different valid values and locators', () => {
      cy.get('#firstName').type('Dana');
      cy.get('[id=lastName]').type('White');
      cy.get('#userEmail').type('dana.white@example.com');
      cy.get('label[for="gender-radio-2"]').click();
      cy.get('input#userNumber').type('2233445566');
      cy.get('#submit').click();
    });
  
    it('Submits form using nth-child and label match', () => {
        cy.get('input#firstName').type('Eve');
        cy.get('input#lastName').type('Taylor');
        cy.get('input#userEmail').type('eve.taylor@example.com');
        cy.contains('label', 'Other').click();
        cy.get('input[placeholder="Mobile Number"]').type('3344556677');
        cy.get('#submit').click();
      });
      
  });
  