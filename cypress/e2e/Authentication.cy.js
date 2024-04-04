///<reference types="cypress"/>
import homeMethods from "../PageObjects/PageMethods/homeMethods";
import authentication from "../PageObjects/PageMethods/authenticationMethods";
import { before } from 'mocha';

const home = new homeMethods();
const auth = new authentication();

describe('Authentication Process', () => {
    let regData;
    before(() => {
        cy.fixture('MyDataFile.csv')
        .then(neatCSV)
        .then(response => regData=response)
    })

    it.only('User is able to register', () => {

        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyRegistrationTab();
        auth.enterNameEmail(
            this.regData[0].UserName,
            this.regData[0].UserEmail
        );
        cy.pause();
        auth.clickSignupBtn();
        auth.verifySignupPage();
        auth.fillTheForm();
        auth.verifyAccountCreated();
        home.varifyUserName('Smith');
        auth.clickDeleteTab();
        auth.verifyAccountDeleted();

    })


    it('Login user with correct credentials', () => {
        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyloginpage();
        auth.enterEmailPass();
        auth.clickLoginBtn();
        home.varifyUserName('Bob');
    })

    it('Unable to login with incorrect credentials', () => {
        cy.visit('/');
        home.verifyHomeTab();
        home.navigateToAuthentication();
        auth.verifyloginpage();
        auth.enterIncorrectEmailPass();
        auth.clickLoginBtn();
        auth.verifyErrorMessage();
        
    })

})