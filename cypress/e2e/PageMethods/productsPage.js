export default class productsPage{

    pageTitle = '.features_items .title';
    productList = '.features_items .col-sm-4';
    view_Product = '.features_items > .col-sm-4:nth-child(3) .product-image-wrapper .choose'; //.features_items > .col-sm-4:nth-child(3) .product-image-wrapper .choose

    verifyProductsPage(){
        cy.get(this.pageTitle)
        .should('be.visible')
        .and('have.text', 'All Products')
        cy.url()
        .should('include', 'products')
    }
    verifyProductList(){
        cy.get(this.productList)
        .should('be.visible')
    }
    clickViewProduct(){
        cy.get(this.view_Product)
        .should('be.visible')
        .click()
    }
}