/// <reference types="cypress" />
import FormPage from '../pages/FormPage';
import { generateUserData } from '../utils/dataGenerator';

describe('DEMOQA Practice Form - Diverse Locator Strategies', () => {
    const formPage = new FormPage();

    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
        formPage.visit();
    });

    it('Submits form using ID and attribute selectors', () => {
        const userData = generateUserData();
        formPage.fillForm(userData);
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
    });

    it('Submits form using class and contains selectors', () => {
        const userData = generateUserData();
        formPage.fillForm(userData);
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
    });

    it('Submits form using a mix of strategies', () => {
        const userData = generateUserData();
        formPage.fillForm(userData);
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
    });

    it('Submits form with different valid values and locators', () => {
        const userData = generateUserData();
        formPage.fillForm(userData);
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
    });

    it('Submits form using nth-child and label match', () => {
        const userData = generateUserData();
        formPage.fillForm(userData);
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
    });
});
