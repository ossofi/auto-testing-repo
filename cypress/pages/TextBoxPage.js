class TextBoxPage {
    visit() {
      cy.visit('https://demoqa.com/text-box');
    }
  
    fillFormWithRandomData() {
      cy.get('#userName').type('Test User');
      cy.get('#userEmail').type(`user${Date.now()}@test.com`);
      cy.get('#currentAddress').type('123 Test Street');
      cy.get('#permanentAddress').type('456 Permanent Ave');
      cy.get('#submit').click();
    }
  
    verifyResults() {
      cy.get('#output').should('contain', 'Test User');
      cy.get('#output').should('contain', 'user');
    }
  }
  
  export default TextBoxPage;
  