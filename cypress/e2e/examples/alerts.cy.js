describe('apper alert when click on the button',() => {

 Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
 });
 it('basic alert', function () {
    cy.visit('https://demoqa.com/alerts');
    cy.get('#alertButton').click();
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('You clicked a button');
    });
 });
    it('clicks button and waits for delayed alert', () => {
        // Visit the webpage containing the button
        cy.visit('https://demoqa.com/alerts');

        // Click the button to trigger the immediate alert
        cy.get('#timerAlertButton', {timeout: 10000}).click();

        // Verify the immediate alert
        cy.on('window:alert', (Text) => {
         expect(Text).to.contains('This alert appeared after 5 seconds');
        });
    });
    it('click on confirm button(not the cancel button' , () => {
       // Visit the webpage containing the button
       cy.visit('https://demoqa.com/alerts');
       cy.get('#confirmButton').click();
    });
    it('click on cancel button', () => {
       // Visit the webpage containing the button
       cy.visit('https://demoqa.com/alerts');
       it('confirm alert Cancel' , function () {
        cy.on('window:confirm' , (cancelConfirm) => {
        return false;
        cy.get('#confirmButton').click();
        cy.get('#confirmResult').should('contain.text' ,'You selected Cancel');
        });
    }); 
    });
});