import homeMethods from "./homeMethods"

const hm = new homeMethods()


export default class authentication{


    newUser_title = ".signup-form h2"
    login_title = ".login-form h2";
    userName = '[data-qa="signup-name"]'
    userEmail = '[data-qa="signup-email"]'
    loginEmail = '[data-qa="login-email"]'
    loginPassword = '[data-qa="login-password"]'
    signupBtn = '.signup-form button'
    loginBtn = '.login-form button'
    form_title = '.login-form h2'
    genderTitle = '[type="radio"]'
    userPass = '[data-qa="password"]'
    day = '.col-xs-4>.selector [data-qa="days"]'
    month = '.col-xs-4>.selector [data-qa="months"]'
    year = '.col-xs-4>.selector [data-qa="years"]'
    newsletter_checkbox = '[name="newsletter"]'
    offers_checkbox = '[name="optin"]'
    firstName = '#first_name'
    lastName = '#last_name'
    company = '#company'
    address1 = '#address1'
    address2 = '#address2'
    country = '[data-qa="country"]'
    state = '#state'
    city = '#city'
    zipcode = '#zipcode'
    mobileNumber = '#mobile_number'
    createAccountBtn = 'button'
    accountCreated_page = '.col-sm-9'
    accountCreated_title = '.title'
    continueBtn = '[data-qa="continue-button"]'
    login_error_msg = '.login-form p'
    signup_error_msg = '.signup-form p'



    verifyRegistrationTab(){
        cy.get(this.newUser_title)
        .should('be.visible')
        .and('have.text', 'New User Signup!')
    }          
    enterNameEmail(name,email){
        cy.get(this.userName)
        .type(name)
        cy.get(this.userEmail)
        .type(email)
    }
    clickSignupBtn(){
        cy.get(this.signupBtn)
        .click()
    }
    verifySignupPage(){
        cy.get(this.form_title)
            .first()
            .should('be.visible')
            .and('contain', 'Enter Account Information')
    }
    fillTheForm(password,day,month,year,fname,lname,company,address,country,state,city,zipcode,mobileNumber){
        cy.get(this.genderTitle)
        .check('Mr')
        .should('be.checked')
        cy.get(this.userPass)
            .type(password)

        cy.get(this.day).select(day)
        cy.get(this.month).select(month)
        cy.get(this.year).select(year)

        cy.get(this.newsletter_checkbox).check()
        cy.get(this.offers_checkbox).check()
        cy.get(this.firstName)
            .type(fname)
        cy.get(this.lastName)
            .type(lname)
            .should('have.value', lname)
            .and('be.visible')
        cy.get(this.company)
            .type(company)
        cy.get(this.address1)
            .type(address)
        cy.get(this.country)
            .select(country)
        cy.get(this.state)   
            .type(state)
        cy.get(this.city)
            .type(city)
        cy.get(this.zipcode)
            .type(zipcode)
        cy.get(this.mobileNumber)
            .type(mobileNumber)
    }
    clickCreateAccBtn(){
        cy.get(this.createAccountBtn)
        .contains('Create Account')
        .should('be.visible')
        .and('contain', 'Create Account')
        .click()
    }
    verifyAccountCreated(){
        cy.get(this.accountCreated_page)
            .should('be.visible')
            .and('contain', 'Account Created!')

        cy.get(this.continueBtn)
            .and('contain', 'Continue')
            .click()
    }

    clickDeleteTab(){        
        //home.element.navbar()
        cy.get(hm.navbar)
        .should('be.visible')
        .contains('Delete')
        .click()
    }
    verifyAccountDeleted(){
        cy.get(this.accountCreated_page)
        .should('be.visible')
        .and('contain', 'Account Deleted!')

        cy.get(this.continueBtn)
        .and('contain', 'Continue')
        .click()
    }
    verifyloginpage(){
        cy.get(this.login_title)
        .should('be.visible')
        .and('have.text', 'Login to your account')
    }
    enterEmailPass(email,password){
        cy.get(this.loginEmail)
        .type(email)
        cy.get(this.loginPassword)
        .type(password)
    }
    enterIncorrectEmailPass(email,password){
        cy.get(this.loginEmail)
        .type(email)
        cy.get(this.loginPassword)
        .type(password)
    }
    clickLoginBtn(){
        cy.get(this.loginBtn)
        .click()
    }
    verifyErrorMessage(){
        cy.get(this.login_error_msg)
        .should('be.visible')
        .and('have.text', 'Your email or password is incorrect!')
    }

    verifyErrorMessage1(){
        cy.get(this.signup_error_msg)
        .should('be.visible')
        .and('have.text', 'Email Address already exist!')
    }
}