///<reference types="cypress"/>
import homeMethods from "./PageMethods/homeMethods";
import authentication from "./PageMethods/authenticationMethods";
const csv = require('neat-csv')

const home = new homeMethods();
const auth = new authentication();

let regData;

describe('Authentication Process', () => {
    
    before(() => {
        cy.fixture('MyDataFile.csv')
        .then(csv)
        .then(response => regData=response)
    })

    it('User is able to register', () => {

        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyRegistrationTab();
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
        auth.clickDeleteTab();
        auth.verifyAccountDeleted();

    })


    it('Login user with correct credentials', () => {
        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyloginpage();
        auth.enterEmailPass(
            regData[1].UserEmail,
            regData[1].Password
        );
        auth.clickLoginBtn();
        home.varifyUserName(regData[1].UserName);
    })

    it('Unable to login with incorrect credentials', () => {
        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyloginpage();
        auth.enterIncorrectEmailPass(
            regData[2].UserEmail,
            regData[2].Password
        );
        auth.clickLoginBtn();
        auth.verifyErrorMessage();      
    })

    it('Logout User', () => {
        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyloginpage();
        auth.enterEmailPass(
            regData[1].UserEmail,
            regData[1].Password
        );
        auth.clickLoginBtn();
        home.varifyUserName(regData[1].UserName);
        home.clickLogout();
        home.verifyAuthenticationPage();      
    })

    it('Register user with existing email', () => {

        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyRegistrationTab();
        auth.enterNameEmail(
            regData[0].UserName,
            regData[1].UserEmail
        );
        
        auth.clickSignupBtn();
        auth.verifyErrorMessage1();
    })

})