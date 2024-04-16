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
        cy.get(this.navbar)
        .should('be.visible')
        .contains('Signup')
        .click()
    }
    varifyUserName(name){
        cy.get(this.navbar)
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
    clickContactUsTab(){
        cy.get(this.navbar)
        .should('be.visible')
        .contains('Contact us')
        .click()
    }
    clickTestCasesTab(){
        cy.get(this.navbar)
        .should('be.visible')
        .contains('Test Cases')
        .click()
    }
    clickProductTab(){
        cy.get(this.navbar)
        .should('be.visible')
        .contains('Products')
        .click()
    }

}