import homeMethods from './PageMethods/homeMethods';
import productsPage from './PageMethods/productsPage';
import productDetailPage from './PageMethods/productDetailPage';
import cartPage from './PageMethods/viewCartPage';

const csv = require ('neat-csv')

const home = new homeMethods();
const product = new productsPage();
const prdDetail = new productDetailPage();
const cart = new cartPage();

let regData;
let prd1;
let prd2;

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

        //Add to cart 1st product
        cy.get('.col-sm-4:nth-child(3) .single-products .productinfo a')
        .should('be.visible')
        .click()
        //Get 1st product name
        cy.get('.col-sm-4:nth-child(3) .single-products .productinfo p')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.log(text)
            prd1 = text.trim()
            cy.log(prd1)

        //Click continue shoping button    
        cy.get('.modal-footer > .btn')
        .should('be.visible')
        .click()
        
        //Add to cart 2nd product
        cy.get('.col-sm-4:nth-child(4) .single-products .productinfo a')
        .should('be.visible')
        .click()
        //Get 2nd product name
        cy.get('.col-sm-4:nth-child(4) .single-products .productinfo p')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.log(text)
            prd2 = text.trim()
            cy.log(prd2)

        //Click view cart button
        cy.get('.modal-body a')
        .should('be.visible')
        .click()

            //Verify products are added in cart
            cy.get('.cart_description > h4 > a').should(($element) => {
                const text = $element.text(); // Extract the text of the element
                expect(text).to.include(prd1); // Check if the text includes prd1
                expect(text).to.include(prd2); // Check if the text includes prd2
            });
        });
        });
    });
    
    it.only('verify product quantity after add to cart', () => {
        cy.visit('/');
        home.verifyHomeTab();
        //product.clickViewProduct();
        // prdDetail.verifyProductDetail();
        // prdDetail.clickAddToCartBtn();
        // product.clickViewCartBtn();
        cart.verifyProductQuantity();
        
    });
});