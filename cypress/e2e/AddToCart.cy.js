import homeMethods from './PageMethods/homeMethods';
import productsPage from './PageMethods/productsPage';
const csv = require ('neat-csv')

const home = new homeMethods();
const product = new productsPage();

let regData;
let prd1;

describe('Add to cart process', () => {
    before(() => {
        cy.fixture('MyDataFile.csv')
        .then(csv)
        .then(response => regData=response)
    })

    it('verify produt detail after add to cart', () => {
        cy.visit('/');
        home.verifyHomeTab();
        home.clickProductTab();
        
        /*product.clickFirstProduct();
        product.clickContinueShopBtn();
        product.clickSecondProduct();
        product.clickViewCartBtn();*/

        cy.get('.col-sm-4:nth-child(3) .single-products .productinfo a')
        .should('be.visible')
        .click()
        cy.get('.col-sm-4:nth-child(3) .single-products .productinfo p')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.log(text)
            prd1 = text.trim()
            cy.log(prd1)

            
        cy.get('.modal-footer > .btn')
        .should('be.visible')
        .click()
        cy.log(prd1)
        
        cy.get('.col-sm-4:nth-child(4) .single-products .productinfo a')
        .should('be.visible')
        .click()
        cy.get('.col-sm-4:nth-child(4) .single-products .productinfo p')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.log(text)
            prd2 = text.trim()
            cy.log(prd2)

        cy.get('.modal-body a')
        .should('be.visible')
        .click()

        cy.get('tbody tr a').each(($element, index, $list) => {
            const name = $element.text();

            //expect(text).to.equal('expected text');
            cy.wrap(name).should('include',prd1).and('include', prd2);
            });
        });
    });        
});