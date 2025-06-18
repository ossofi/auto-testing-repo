class AlertsPage {
  constructor() {
    this.alertButton = '#alertButton';
    this.timerAlertButton = '#timerAlertButton';
    this.confirmButton = '#confirmButton';
    this.promptButton = '#promtButton';
  }

  clickAlertButton() {
    cy.get(this.alertButton).click();
  }

  clickDelayedAlert() {
    cy.get(this.timerAlertButton).click();
  }

  clickConfirmButton() {
    cy.get(this.confirmButton).click();
  }

  clickPromptButton() {
    cy.get(this.promptButton).click();
  }

  verifyAlertText(expectedText) {
    cy.on('window:alert', (text) => {
      expect(text).to.equal(expectedText);
    });
  }
}

export default AlertsPage;
