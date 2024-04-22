///<reference types="cypress"/>
import homeMethods from './PageMethods/homeMethods';

const csv = require('csv-parser')
const home = new homeMethods();

let regData;
describe('Categories and Brands', () => {
    before(() => {
        cy.fixture('MyDataFile.csv')
        .then(csv)
        .then(response => regData = response)
    })

    it('verify products by categories', () => {
    cy.visit('/')
    home.verifyCategoryText()
    home.clickCategory('Women')
    home.clickWomenSubCategory('Dress')
    home.verifyCategoryPage()
    home.clickCategory('Men')
    home.clickMenSubCategory('Tshirts')
    home.verifyCategoryPage()
  })
  //it('verify products by brands', () => {}
})