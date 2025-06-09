/// <reference types="cypress" />
require('cypress-xpath');
import { generateUserData } from '../utils/dataGenerator';

describe('Text Box Test Suite - Multiple Locator Strategies with Random Data', () => {
  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box', { timeout: 120000 });
  });

  it('fills text boxes using ID selectors and verifies results', () => {
    const user = generateUserData();
    const fullName = `${user.firstName} ${user.lastName}`;
    cy.log(`Generated Email: ${user.email}`);
    
    cy.get('#userName').clear().type(fullName);
    cy.get('#userEmail').clear().type(user.email);
    cy.get('#currentAddress').clear().type(user.currentAddress);
    cy.get('#permanentAddress').clear().type(user.permanentAddress);
    cy.get('#submit').click();

    cy.get('#output #name').should('contain', fullName);
    cy.get('#output #email').should('contain', user.email);
    cy.get('#output #currentAddress').should('contain', user.currentAddress);
    cy.get('#output #permanentAddress').should('contain', user.permanentAddress);
  });

  it('fills text boxes using class selectors and verifies results', () => {
    const user = generateUserData();
    const fullName = `${user.firstName} ${user.lastName}`;
    
    cy.get('.form-control').eq(0).clear().type(fullName);
    cy.get('.form-control').eq(1).clear().type(user.email);
    cy.get('.form-control').eq(2).clear().type(user.currentAddress);
    cy.get('.form-control').eq(3).clear().type(user.permanentAddress);
    cy.get('#submit').click();

    cy.get('#output').should('contain', fullName);
    cy.get('#output').should('contain', user.email);
  });

  it('fills text boxes using attribute selectors and verifies results', () => {
    const user = generateUserData();
    const fullName = `${user.firstName} ${user.lastName}`;
    
    cy.get('[id="userName"]').clear().type(fullName);
    cy.get('[id="userEmail"]').clear().type(user.email);
    cy.get('[id="currentAddress"]').clear().type(user.currentAddress);
    cy.get('[id="permanentAddress"]').clear().type(user.permanentAddress);
    cy.get('#submit').click();

    cy.get('#output').should('contain', fullName);
    cy.get('#output').should('contain', user.email);
  });

  it('fills text boxes using XPath selectors and verifies results', () => {
    const user = generateUserData();
    const fullName = `${user.firstName} ${user.lastName}`;
    
    cy.xpath('//input[@id="userName"]').clear().type(fullName);
    cy.xpath('//input[@id="userEmail"]').clear().type(user.email);
    cy.xpath('//textarea[@id="currentAddress"]').clear().type(user.currentAddress);
    cy.xpath('//textarea[@id="permanentAddress"]').clear().type(user.permanentAddress);
    cy.get('#submit').click();

    cy.get('#output').should('contain', fullName);
    cy.get('#output').should('contain', user.email);
  });

  it('fills text boxes by finding labels (using "for" attribute) and navigating to inputs, then verifies results', () => {
    const user = generateUserData();
    const fullName = `${user.firstName} ${user.lastName}`;
  
    cy.contains('label', /full name/i)
      .invoke('attr', 'for')
      .then((id) => {const targetId = id ? id : 'userName';
        cy.get(`#${targetId}`).clear().type(fullName);
      });
  
    cy.contains('label', /email/i)
      .invoke('attr', 'for')
      .then((id) => {
        const targetId = id ? id : 'userEmail';
        cy.get(`#${targetId}`).clear().type(user.email);
      });
  
    cy.get('#currentAddress').clear().type(user.currentAddress);
    cy.get('#permanentAddress').clear().type(user.permanentAddress);
  
    cy.get('#submit').click();
    cy.get('#output #name').should('contain', fullName);
    cy.get('#output #email').should('contain', user.email);
    cy.get('#output #currentAddress').should('contain', user.currentAddress);
    cy.get('#output #permanentAddress').should('contain', user.permanentAddress);
  });
  
});
