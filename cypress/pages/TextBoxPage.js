class TextBoxPage {
  visit() {
    cy.visit('https://demoqa.com/text-box');
  }

  fillForm({ name, email, currentAddress, permanentAddress }) {
    cy.get('#userName').type(name);
    cy.get('#userEmail').type(email);
    cy.get('#currentAddress').type(currentAddress);
    cy.get('#permanentAddress').type(permanentAddress);
    cy.get('#submit').click();
  }

  verifyResults({ name, email, currentAddress, permanentAddress }) {
    cy.get('#output #name').should('contain', name);
    cy.get('#output #email').should('contain', email);
    cy.get('#output #currentAddress').should('contain', currentAddress);
    cy.get('#output #permanentAddress').should('contain', permanentAddress);
  }
}

export default TextBoxPage;
