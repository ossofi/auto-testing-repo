/// <reference types="cypress" />
require('cypress-xpath');

describe('Text Box Test Suite', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box');
    });

    it('fills text boxes using ID and checks result', () => {
        const timestamp = Date.now();
        const name = `User${timestamp}`;
        const email = `user${timestamp}@test.com`;

        cy.get('#userName').type(name); 
        cy.get('#userEmail').type(email);
        cy.get('#currentAddress').type('123 Current St');
        cy.get('#permanentAddress').type('456 Permanent Ave');
        cy.get('#submit').click();

        cy.get('#output #name').should('contain', name);
        cy.get('#output #email').should('contain', email);
        cy.get('#output #currentAddress').should('contain', '123 Current St');
        cy.get('#output #permanentAddress').should('contain', '456 Permanent Ave');
    });


    it('fills form using class selectors', () => {
        cy.get('.form-control').eq(0).type('John Doe');
        cy.get('.form-control').eq(1).type('johndoe@test.com');
        cy.get('.form-control').eq(2).type('123 Street Name');
        cy.get('.form-control').eq(3).type('789 Avenue Name');
        cy.get('#submit').click();

        cy.get('#output').should('contain', 'John Doe');
        cy.get('#output').should('contain', 'johndoe@test.com');
    });

    
    it('fills fields using attribute selectors', () => {
        cy.get('[id="userName"]').type('Jane Doe');
        cy.get('[id="userEmail"]').type('janedoe@test.com');
        cy.get('[id="currentAddress"]').type('123 Main St');
        cy.get('[id="permanentAddress"]').type('456 Oak Ave');
        cy.get('#submit').click();

        cy.get('#output').should('contain', 'Jane Doe');
        cy.get('#output').should('contain', 'janedoe@test.com');
    });


    it('fills fields using XPath selectors', () => {
        cy.xpath('//input[@id="userName"]').type('Alice Wonderland');
        cy.xpath('//input[@id="userEmail"]').type('alice@test.com');
        cy.xpath('//textarea[@id="currentAddress"]').type('45 Wonderland Rd');
        cy.xpath('//textarea[@id="permanentAddress"]').type('99 Fairy Tale St');
        cy.get('#submit').click();

        cy.get('#output').should('contain', 'Alice Wonderland');
        cy.get('#output').should('contain', 'alice@test.com');
    });

    
    it('fills fields by finding labels and navigating to input', () => {
        cy.get('#userName').type('Harry Potter');
        cy.get('#userEmail').type('harry@hogwarts.com');
        cy.get('#currentAddress').type('4 Privet Drive');
        cy.get('#permanentAddress').type('Hogwarts, UK');
        cy.get('#submit').click();
    });
    

});
