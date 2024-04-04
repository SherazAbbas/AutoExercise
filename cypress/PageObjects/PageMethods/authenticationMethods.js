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
    enterNameEmail(){
        auth.element.userName()
        .type('Smith')
        auth.element.userEmail()
        .type('smith8c@gmail.com')
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
    fillTheForm(){
        auth.element.genderTitle()
        .check('Mr')
        .should('be.checked')
        auth.element.userPass()
            .type('webdir123RR')

        auth.element.day().select('23')
        auth.element.month().select('2')
        auth.element.year().select('1990')

        auth.element.newsletter_checkbox().check()
        auth.element.offers_checkbox().check()
        auth.element.firstName()
            .type('Steve')
        auth.element.lastName()
            .type('Smith')
            .should('have.value', 'Smith')
            .and('be.visible')
        auth.element.company()
            .type('RSY')
        auth.element.address1()
            .type('36A Main St')
        auth.element.country()
            .select('United States')
        auth.element.state()   
            .type('New York')
        auth.element.city()
            .type('New York')
        auth.element.zipcode()
            .type('10001')
        auth.element.mobileNumber()
            .type('1234567890')
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
    enterEmailPass(){
        auth.element.loginEmail()
        .type('Bob8c@gmail.com')
        auth.element.loginPassword()
        .type('webdir123RR')
    }
    enterIncorrectEmailPass(){
        auth.element.loginEmail()
        .type('adob@gmail.com')
        auth.element.loginPassword()
        .type('web123RR')
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
}