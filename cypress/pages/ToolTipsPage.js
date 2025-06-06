class ToolTipsPage {
    visit() {
      cy.visit('https://demoqa.com/tool-tips');
    }
  
    hoverAndCheck(selector, expectedText) {
      cy.get(selector).trigger('mouseover');
      cy.get('.tooltip-inner').should('contain', expectedText);
    }
  }
  
  export default ToolTipsPage;
  