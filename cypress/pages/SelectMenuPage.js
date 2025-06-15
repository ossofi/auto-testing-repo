class SelectMenuPage {
  constructor() {
    this.url = 'https://demoqa.com/select-menu';
    this.oldSelectMenu = '#oldSelectMenu';
    this.selectOneContainer = '#selectOne';
    this.selectOneControl = 'div[class*="control"]';
    this.selectOneMenu = 'div[class*="menu"]';
    this.selectOneOption = 'div[class*="option"]';
    this.selectOneSingleValue = 'div[class*="singleValue"]';
    this.multiSelectInput = '#react-select-4-input';
    this.colorSelectInput = '#react-select-3-input';
  }

  visit() {
    cy.visit(this.url);
  }

  selectOldStyle(color) {
    cy.get(this.oldSelectMenu)
      .select(color)
      .invoke('val')
      .then(val => {
        cy.log(`Selected value for color ${color} is: ${val}`);
      });
  }

  selectTitle(title) {
    cy.get(this.selectOneContainer)
      .parent()
      .find(this.selectOneControl)
      .click({ force: true });

    cy.get(this.selectOneMenu, { timeout: 10000 }).should('be.visible');

    cy.contains(this.selectOneOption, title)
      .should('exist')
      .click({ force: true });

    cy.get(this.selectOneContainer)
      .parent()
      .find(this.selectOneSingleValue)
      .should('contain.text', title);
  }

  selectMultiColors(colors) {
    cy.get(this.multiSelectInput)
      .click({ force: true })
      .should('be.visible');

    colors.forEach(color => {
      cy.get(this.multiSelectInput)
        .type(`${color}{enter}`, { force: true });
    });
  }

  selectColor(color) {
    cy.get(this.colorSelectInput)
      .click({ force: true })
      .should('be.visible');

    cy.get(this.colorSelectInput)
      .type(`${color}{enter}`, { force: true });

    cy.get('*')
      .contains(color)
      .should('exist');
  }
}

export default SelectMenuPage;
