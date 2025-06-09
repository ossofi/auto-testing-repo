/// <reference types="cypress" />
import SelectMenuPage from '../pages/SelectMenuPage';
import { generateSelectData } from '../utils/selectMenuDataGenerator';

describe('DemoQA Select Menu Tests', () => {
  const selectMenuPage = new SelectMenuPage();

  beforeEach(() => {
    selectMenuPage.visit();
  });

  it('Selects an option from the old style select menu', () => {
    const testData = generateSelectData();
    selectMenuPage.selectOldStyle(testData.color);
  });

  it('Selects a title from the single select dropdown', () => {
    const testData = generateSelectData();
    selectMenuPage.selectTitle(testData.title);
  });

  it('Selects multiple values from the multi-select dropdown', () => {
    const testData = generateSelectData();
    selectMenuPage.selectMultiColors(testData.multiColors);
  });

  it('Selects a color from the dropdown', () => {
    const testData = generateSelectData();
    selectMenuPage.selectColor(testData.reactColor);
  });
});