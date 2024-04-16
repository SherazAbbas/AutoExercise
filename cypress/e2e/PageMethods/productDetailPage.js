export default class productDetailPage{    

    product_name = '.product-information h2'
    product_category = '.product-information p'
    product_detail = '.product-information p b'
    product_price = '.product-information span span'

    verifyProductDetailPage(){
        cy.url()
        .should('include', 'product_details')
    }
    verifyProductDetail(){
        cy.get(this.product_name)
        .should('be.visible')
        cy.get(this.product_category)
        .contains("Category")
        .should('be.visible')
        cy.get(this.product_detail)
        .should('contain','Availability')
        .and('contain','Condition')
        .and('contain','Brand')
        .and('be.visible')
        cy.get(this.product_price)
        .should('be.visible')
    }
}