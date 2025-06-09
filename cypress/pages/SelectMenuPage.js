class SelectMenuPage {
  visit() {
    cy.visit('https://demoqa.com/select-menu');
  }

  selectOldStyle(color) {
    cy.get('#oldSelectMenu')
      .select(color)
      .invoke('val')
      .then(val => {
        cy.log(`Selected value for color ${color} is: ${val}`);
      });
  }

  selectTitle(title) {
    cy.get('#selectOne')
      .parent()
      .find('div[class*="control"]')
      .click({ force: true });
      
    cy.get('div[class*="menu"]', { timeout: 10000 }).should('be.visible');
    
    cy.contains('div[class*="option"]', title)
      .should('exist')
      .click({ force: true });
      
    cy.get('#selectOne')
      .parent()
      .find('div[class*="singleValue"]')
      .should('contain.text', title);
  }

  selectMultiColors(colors) {
    cy.get('#react-select-4-input')
      .click({ force: true })
      .should('be.visible');
      
    colors.forEach(color => {
      cy.get('#react-select-4-input')
        .type(`${color}{enter}`, { force: true });
    });
    
  }

  selectColor(color) {
    cy.get('#react-select-3-input')
      .click({ force: true })
      .should('be.visible');
      
    cy.get('#react-select-3-input')
      .type(`${color}{enter}`, { force: true });
      
    cy.get('*')
      .contains(color)
      .should('exist');
  }
}

export default SelectMenuPage;