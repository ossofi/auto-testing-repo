class AlertsPage {
    clickAlertButton() {
      cy.get('#alertButton').click();
    }
  
    clickDelayedAlert() {
      cy.get('#timerAlertButton').click();
    }
  
    clickConfirmButton() {
      cy.get('#confirmButton').click();
    }
  
    clickPromptButton() {
      cy.get('#promtButton').click();
    }
  
    verifyAlertText(expectedText) {
      cy.on('window:alert', (text) => {
        expect(text).to.equal(expectedText);
      });
    }
  }
  
  export default AlertsPage;
  