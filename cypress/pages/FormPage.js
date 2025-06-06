class FormPage {
    visit() {
      cy.visit('https://demoqa.com/automation-practice-form');
    }
  
    fillForm({ firstName, lastName, email, gender, phone }) {
      cy.get('#firstName').type(firstName);
      cy.get('#lastName').type(lastName);
      cy.get('#userEmail').type(email);
      cy.contains('.custom-control-label', gender).click();
      cy.get('#userNumber').type(phone);
      cy.get('#submit').click({ force: true });
    }
  }
  
  export default FormPage;
  