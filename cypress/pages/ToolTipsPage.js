class ToolTipsPage {
  constructor() {
    this.url = 'https://demoqa.com/tool-tips';
    this.tooltipInner = '.tooltip-inner';
  }

  visit() {
    cy.visit(this.url);
  }

  hoverAndCheck(selector, expectedText) {
    cy.get(selector).trigger('mouseover');
    cy.get(this.tooltipInner).should('contain', expectedText);
  }
}

export default ToolTipsPage;
