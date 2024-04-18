///<reference types="cypress"/>
import homeMethods from "./PageMethods/homeMethods";
import productsPage from "./PageMethods/productsPage";
import viewCart from "./PageMethods/viewCartPage";
import authMethods from "./PageMethods/authenticationMethods";


const csv = require('csv-parser');
const home = new homeMethods();
const products = new productsPage();
const cart = new viewCart();
const auth = new authMethods();


let regData;
describe('Order place process', () => {
    
    before(() => {
        cy.fixture('MyDataFile.csv')
        .then(csv)
        .then(response => regData=response)
    })

    it('Place order and register while checkout', () => {
        cy.visit('/');
        home.verifyHomeTab();
        products.clickFirstProduct();
        products.clickViewCartBtn();
        cart.clickCheckoutBtn();
        cart.clickRegisterLoginBtn();        

        //Registration code
        auth.enterNameEmail(
            regData[0].UserName,
            regData[0].UserEmail
        );
        
        auth.clickSignupBtn();
        auth.verifySignupPage();
        auth.fillTheForm(
            regData[0].Password,
            regData[0].Day,
            regData[0].Month,
            regData[0].Year,
            regData[0].FirstName,
            regData[0].LastName,
            regData[0].Company,
            regData[0].Address,
            regData[0].Country,
            regData[0].State,
            regData[0].City,
            regData[0].ZipCode,
            regData[0].MobileNumber
        );
        auth.clickCreateAccBtn();
        auth.verifyAccountCreated();
        home.varifyUserName(regData[0].UserName);

        home.clickCartTab();
        cart.clickCheckoutBtn();
        cart.enterComment();
        cart.clickPlaceOrderBtn();
        cart.fillPaymentDetails();
        cart.verifyOrderPlaced();

        auth.clickDeleteTab();
        auth.verifyAccountDeleted();

    });
});