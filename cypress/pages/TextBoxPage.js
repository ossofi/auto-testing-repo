class TextBoxPage {
  constructor() {
    this.url = 'https://demoqa.com/text-box';
    this.nameInput = '#userName';
    this.emailInput = '#userEmail';
    this.currentAddressInput = '#currentAddress';
    this.permanentAddressInput = '#permanentAddress';
    this.submitBtn = '#submit';
    this.outputName = '#output #name';
    this.outputEmail = '#output #email';
    this.outputCurrentAddress = '#output #currentAddress';
    this.outputPermanentAddress = '#output #permanentAddress';
  }

  visit() {
    cy.visit(this.url);
  }

  fillForm({ name, email, currentAddress, permanentAddress }) {
    cy.get(this.nameInput).type(name);
    cy.get(this.emailInput).type(email);
    cy.get(this.currentAddressInput).type(currentAddress);
    cy.get(this.permanentAddressInput).type(permanentAddress);
    cy.get(this.submitBtn).click();
  }

  verifyResults({ name, email, currentAddress, permanentAddress }) {
    cy.get(this.outputName).should('contain', name);
    cy.get(this.outputEmail).should('contain', email);
    cy.get(this.outputCurrentAddress).should('contain', currentAddress);
    cy.get(this.outputPermanentAddress).should('contain', permanentAddress);
  }
}

export default TextBoxPage;
