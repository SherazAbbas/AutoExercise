import homeMethods from './PageMethods/homeMethods';
const csv = require ('neat-csv')

const home = new homeMethods();

let regData;
describe('Subscription', () => {
    before(() => {
        cy.fixture('MyDataFile.csv')
        .then(csv)
        .then(response => regData=response)
    })

    it('Subscription at homepage', () => {
        cy.visit('/');
        home.verifyHomeTab();
        cy.scrollTo('bottom');
        home.verifySubscriptionText();
        home.enterSubscriptionEmail(regData[1].UserEmail);
        home.verifySuccessMessage(regData[0].SuccessMessage);
  })
  /*it('Subscription at Cart', () => {
    cy.visit('/');
    home.verifyHomeTab();
    home.clickCartTab();
    cy.scrollTo('bottom');
    home.verifySubscriptionText();
    home.enterSubscriptionEmail(regData[1].UserEmail);
    home.verifySuccessMessage(regData[0].SuccessMessage);    
    })*/
})