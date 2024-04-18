
export default class viewCart{

    prdPrice = '.cart_price > p'
    prdQuantity = '.cart_quantity > button'
    checkoutBtn = '.container .btn'
    registerLogin_Btn = '.modal-body a'
    placeOrder_Btn = '.container .check_out'
    //Payment page
    cardNameField = '[data-qa="name-on-card"]';
    cardNumberField = '[data-qa="card-number"]';
    expiryMonthField = '[data-qa="expiry-month"]';
    expiryYearField = '[data-qa="expiry-year"]';
    cvcField = '[data-qa="cvc"]';
    paymentConfirm_Btn = '#submit'
    OrdersuccessMessage = '#form p'
    buttons = '.col-sm-9 .btn'
    //product detail
    quantity = '#quantity'
    view_Product = '.features_items > .col-sm-4:nth-child(3) .product-image-wrapper .choose'

    verifyProductQuantity(){
        cy.get(this.view_Product)
        .should('be.visible')
        .click()
        cy.get(this.quantity).clear().type('2')
        cy.get(this.quantity).invoke('val').then(qty => {
            cy.log(qty)
            cy.get('.product-information .btn').click()
            cy.get('.modal-body a').click()
        cy.get(this.prdQuantity).should('have.text', qty)
    });
    }
    clickCheckoutBtn(){
        cy.get(this.checkoutBtn)
        .contains('checkout')
        .click()
    }
    clickRegisterLoginBtn(){
        cy.get(this.registerLogin_Btn)
        .should('be.visible')
        .click()
    }
    enterComment(comment="nice"){
        cy.get('textarea')
        .should('be.visible')
        .type(comment)
    }
    clickPlaceOrderBtn(){
        cy.get(this.placeOrder_Btn)
        .should('be.visible')
        .click()
    }
    fillPaymentDetails(){
        cy.get(this.cardNameField).type('Smith')
        cy.get(this.cardNumberField).type('1234567890123456')
        cy.get(this.expiryMonthField).type('12')
        cy.get(this.expiryYearField).type('2025')
        cy.get(this.cvcField).type('123')
        cy.get(this.paymentConfirm_Btn).click()
    }
    verifyOrderPlaced(){
        cy.get(this.OrdersuccessMessage)
        .should('be.visible')
        .and('contain', 'Congratulations! Your order has been confirmed!')
        cy.get(this.buttons)
        .contains('continue')
        .click
    }

}