export default class homeMethods{

    navbar = ".col-sm-8>.shop-menu>.nav li";
    subscription_text = '.single-widget h2';
    subscription_email_field = '#susbscribe_email';
    arrowIcon = '#subscribe';
    success_message = '.alert-success';
    sidebar_titles = '.left-sidebar h2'
    categories_title = '.panel-title' //.panel:nth-child(1)
    womenSubCategor_title = '#Women > .panel-body > ul > li'
    menSubCategor_title = '#Men > .panel-body > ul > li' 



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
    verifySubscriptionText(){
        cy.get(this.subscription_text)
        .should('be.visible')
        .and('contain', 'Subscription')
    }
    enterSubscriptionEmail(email){
        cy.get(this.subscription_email_field)
        .should('be.visible')
        .type(email)
        cy.get(this.arrowIcon)
        .should('be.visible')
        .click()
    }
    verifySuccessMessage(message){
        cy.get(this.success_message)
        .should('be.visible')
        .and('contain', message)
    }
    clickCartTab(){
        cy.get(this.navbar)
        .should('be.visible')
        .contains('Cart')
        .click()
    }
    verifyCategoryText(){
        cy.get(this.sidebar_titles)
        .first()
        .should('contain','Category')
    }
    clickCategory(category){
        cy.get(this.categories_title)
        .contains(category)
        .click()
    }
    clickWomenSubCategory(subcategory){
        cy.get(this.womenSubCategor_title)
        .contains(subcategory)
        .click()
    }
    verifyCategoryPage(){
        cy.url()
        .should('include', '/category_products')
    }
    clickMenSubCategory(subcategory){
        cy.get(this.menSubCategor_title)
        .contains(subcategory)
        .click()
    }

}