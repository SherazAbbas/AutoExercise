import homeMethods from "./PageMethods/homeMethods";
import ContactUs from "./PageMethods/contactUsPage";
import productsPage from "./PageMethods/productsPage";
import productDetailPage from "./PageMethods/productDetailPage";
const csv = require('neat-csv')

const home = new homeMethods();
const contactUs = new ContactUs();
const products = new productsPage();
const productDetail = new productDetailPage();

let regData;

describe('Page verification', () => {
    
    before(() => {
        cy.fixture('MyDataFile.csv')
        .then(csv)
        .then(response => regData=response)
    })

    it('Verify ContactUs Form functionality', () => {

        cy.visit('/');
        home.verifyHomeTab();
        home.clickContactUsTab();
        contactUs.verifyContactUsPage();
        contactUs.enterName(regData[0].UserName);
        contactUs.enterEmail(regData[0].UserEmail);
        contactUs.enterSubject(regData[0].Subject);
        contactUs.enterMessage(regData[0].Message);
        contactUs.chooseFile()
        contactUs.clickSubmitButton();
        cy.on('window:confirm', () => true)
        contactUs.verifySuccessMessage();
        contactUs.clickHomeBtn();
        home.verifyHomeTab();
    })

    it('Verify Test Cases page', () => {

        cy.visit('/');
        home.verifyHomeTab();
        home.clickTestCasesTab();
        contactUs.verifyTestCasesPage();

    })

    it.only('Verify product detail page', () => {

        cy.visit('/');
        home.verifyHomeTab();
        home.clickProductTab();
        products.verifyProductsPage();
        products.verifyProductList();
        products.clickViewProduct();
        productDetail.verifyProductDetailPage();
        productDetail.verifyProductDetail();

    })

    it.only('Search product', () => {

        cy.visit('/');
        home.verifyHomeTab();
        home.clickProductTab();
        products.verifyProductsPage();
    })

})