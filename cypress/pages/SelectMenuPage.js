class SelectMenuPage {
    visit() {
      cy.visit('https://demoqa.com/select-menu');
    }
  
    selectValue(optionText) {
      cy.get('#withOptGroup').click();
      cy.get('div[role="listbox"]')
        .should('be.visible')
        .contains(optionText)
        .click({ force: true });
    }
  
    selectOne(optionText) {
      cy.get('#selectOne').click();
      cy.get('div[role="listbox"]')
        .should('be.visible')
        .contains(optionText)
        .click({ force: true });
    }
  
    selectOldStyle(optionText) {
      cy.get('#oldSelectMenu')
        .select(optionText)
        .invoke('val')
        .then(val => {
          cy.log(`Selected value for color ${optionText} is: ${val}`);
        });
    }
  
    selectMultiColors(colors) {
      colors.forEach(color => {
        cy.get('#cars').select(color);
      });
    }
  }
  
  export default SelectMenuPage;
  