import authElement from "../PageElements/authenticationElements"
import homeElement from "../PageElements/homeElements"

const auth = new authElement()
const home = new homeElement()

export default class authentication{
    verifyRegistrationTab(){
        auth.element.newUser_title()
        .should('be.visible')
        .and('have.text', 'New User Signup!')
    }          
    enterNameEmail(name,email){
        auth.element.userName()
        .type(name)
        auth.element.userEmail()
        .type(email)
    }
    clickSignupBtn(){
        auth.element.signupBtn()
        .click()
    }
    verifySignupPage(){
        auth.element.form_title()
            .first()
            .should('be.visible')
            .and('contain', 'Enter Account Information')
    }
    fillTheForm(password,day,month,year,fname,lname,company,address,country,state,city,zipcode,mobileNumber){
        auth.element.genderTitle()
        .check('Mr')
        .should('be.checked')
        auth.element.userPass()
            .type(password)

        auth.element.day().select(day)
        auth.element.month().select(month)
        auth.element.year().select(year)

        auth.element.newsletter_checkbox().check()
        auth.element.offers_checkbox().check()
        auth.element.firstName()
            .type(fname)
        auth.element.lastName()
            .type(lname)
            .should('have.value', lname)
            .and('be.visible')
        auth.element.company()
            .type(company)
        auth.element.address1()
            .type(address)
        auth.element.country()
            .select(country)
        auth.element.state()   
            .type(state)
        auth.element.city()
            .type(city)
        auth.element.zipcode()
            .type(zipcode)
        auth.element.mobileNumber()
            .type(mobileNumber)
    }
    clickCreateAccBtn(){
        auth.element.createAccountBtn()
        .should('be.visible')
        .and('contain', 'Create Account')
        .click()
    }
    verifyAccountCreated(){
        auth.element.accountCreated_page()
            .should('be.visible')
            .and('contain', 'Account Created!')

        auth.element.continueBtn()
            .and('contain', 'Continue')
            .click()
    }

    clickDeleteTab(){        
        home.element.navbar()
        .should('be.visible')
        .contains('Delete')
        .click()
    }
    verifyAccountDeleted(){
        auth.element.accountCreated_page()
        .should('be.visible')
        .and('contain', 'Account Deleted!')

        auth.element.continueBtn()
        .and('contain', 'Continue')
        .click()
    }
    verifyloginpage(){
        auth.element.login_title()
        .should('be.visible')
        .and('have.text', 'Login to your account')
    }
    enterEmailPass(email,password){
        auth.element.loginEmail()
        .type(email)
        auth.element.loginPassword()
        .type(password)
    }
    enterIncorrectEmailPass(email,password){
        auth.element.loginEmail()
        .type(email)
        auth.element.loginPassword()
        .type(password)
    }
    clickLoginBtn(){
        auth.element.loginBtn()
        .click()
    }
    verifyErrorMessage(){
        auth.element.login_error_msg()
        .should('be.visible')
        .and('have.text', 'Your email or password is incorrect!')
    }

    verifyErrorMessage1(){
        auth.element.signup_error_msg()
        .should('be.visible')
        .and('have.text', 'Email Address already exist!')
    }
}