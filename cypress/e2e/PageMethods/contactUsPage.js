export default class ContactUs{

    formTitle = ".contact-form h2"
    //formFields = ".contact-form .form-group"
    nameField = '[data-qa="name"]'
    emailField = '[data-qa="email"]'
    subjectField = '[data-qa="subject"]'
    messageField = '[data-qa="message"]'
    uploadFile = ':nth-child(6) > .form-control'
    submitButton = '[data-qa="submit-button"]'
    successMessage = '.alert-success'
    homeBtn = '.btn-success'
    testCasesTitle = '.container .row .text-center'
    
    

    verifyContactUsPage(){
        cy.get(this.formTitle)
        .should('be.visible')
        .and('have.text', 'Get In Touch')
    }
    enterName(name){
        cy.get(this.nameField)
        .should('be.visible')
        .type(name)
    }
    enterEmail(email){
        cy.get(this.emailField)
        .type(email)
    }
    enterSubject(subject){
        cy.get(this.subjectField)
        .type(subject)
    }
    enterMessage(message){
        cy.get(this.messageField)
        .type(message)
    }
    chooseFile(){
        cy.get(this.uploadFile)
        .selectFile('C:/Users/dell/Pictures/FreeAD/pyment.png')
    }
    clickSubmitButton(){
        cy.get(this.submitButton)
        .click()
    }
    verifySuccessMessage(){
        cy.get(this.successMessage)
        .first()
        .should('be.visible')
        .and('have.text', 'Success! Your details have been submitted successfully.')
    }
    clickHomeBtn(){
        cy.get(this.homeBtn)
        .click()
    }
    verifyTestCasesPage(){
        cy.url()
        .should('include', '/test_cases')
        cy.get(this.testCasesTitle)
        .should('be.visible')
        .and('have.text', 'Test Cases')
    }
}