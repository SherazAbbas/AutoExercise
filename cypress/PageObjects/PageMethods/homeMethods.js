import homeElement from "../PageElements/homeElements";

const home = new homeElement()
export default class homeMethods{

    navbar = ".col-sm-8>.shop-menu>.nav li";



    verifyHomeTab(){
        //home.element.navbar()
        cy.get(this.navbar)
        .should('be.visible')
        .contains('Home')
        .should('have.attr','style')
    }
    navigateToAuthentication(){
        home.element.navbar()
        .should('be.visible')
        .contains('Signup')
        .click()
    }
    varifyUserName(name){
        home.element.navbar()
        .contains(' Logged in as ')
        .should('be.visible')
        .and('contain', name)
    }

    clickLogout(){
        cy.get(this.navbar)
        .should('be.visible')
        .contains('Logout')
        .click()
    }
    verifyAuthenticationPage(){
        cy.url()
        .should('include', '/login')
    }

}