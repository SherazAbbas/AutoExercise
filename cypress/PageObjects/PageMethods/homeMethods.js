import homeElement from "../PageElements/homeElements";

const home = new homeElement()
export default class homeMethods{
    verifyHomeTab(){
        home.element.navbar()
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
}