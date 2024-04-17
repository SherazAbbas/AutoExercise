let prd1;
export default class productsPage{

    pageTitle = '.features_items .title';
    productList = '.features_items .col-sm-4';
    view_Product = '.features_items > .col-sm-4:nth-child(3) .product-image-wrapper .choose'; //.features_items > .col-sm-4:nth-child(3) .product-image-wrapper .choose
    searchField = '#search_product';
    searchBtn = '#submit_search';
    searchResults = '.productinfo p';  
    //firstProduct = '.col-sm-4:nth-child(3) > .overlay-content a';  //Add to Cart btn
    firstProduct = '.col-sm-4:nth-child(3) .single-products .productinfo a'
    firstPrdName = '.col-sm-4:nth-child(3) .single-products .productinfo p'
    secondProduct = '.col-sm-4:nth-child(4) .single-products .productinfo a'
    continueShopBtn = '.modal-footer > .btn'
    viewCartBtn = '.modal-body a'

    

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
    clickSearchField(){
        cy.get('#search_product')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Search Product')
    }
    enterSearchText(text){
        cy.get('#search_product')
        .should('be.visible')
        .type(text)
    }
    clickSearchBtn(){
        cy.get('#submit_search')
        .should('be.visible')
        .click()
    }
    verifySearchResults(text){
        cy.get(this.searchResults)
        .should('be.visible')
        .and('contain', text)

    /*    cy.get(this.searchResults).each(($element, index, $list) => {
            const name = $element.text();

            //expect(text).to.equal('expected text');
            cy.wrap(name).should('include', count);
        });*/
    }
    verifySearchResultsCount(count){
        cy.get(this.searchResults)
        .should('have.length', count)        
    }
    clickFirstProduct(){
        cy.get(this.firstProduct)
        .should('be.visible')
        .click()
        cy.get(this.firstPrdName)
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.log(text)
            prd1 = text.trim()
            // localStorage.setItem('productName', text)
            // cy.log(localStorage.getItem('productName'))
            //this.template = text.trim()
        })

    }
    clickContinueShopBtn(){
        cy.get(this.continueShopBtn)
        .should('be.visible')
        .click()
    }
    clickSecondProduct(){
        cy.get(this.secondProduct)
        .should('be.visible')
        .click()
    }
    clickViewCartBtn(){
        cy.get(this.viewCartBtn)
        .should('be.visible')
        .click()
    }
}