class FormPage {
  constructor() {
    this.url = 'https://demoqa.com/automation-practice-form';
    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.email = '#userEmail';
    this.genderLabel = '.custom-control-label';
    this.phone = '#userNumber';
    this.submit = '#submit';
  }

  visit() {
    cy.visit(this.url);
  }

  fillForm({ firstName, lastName, email, gender, phone }) {
    cy.get(this.firstName).type(firstName);
    cy.get(this.lastName).type(lastName);
    cy.get(this.email).type(email);
    cy.contains(this.genderLabel, gender).click();
    cy.get(this.phone).type(phone);
    cy.get(this.submit).click({ force: true });
  }
}

export default FormPage;
