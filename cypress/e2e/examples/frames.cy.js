 // <reference types="Cypress" />
import 'cypress-iframe';
const url = 'https://demoqa.com/frames';
Cypress.on('uncaught:exception', (err, runnable) => {
    // By returning false here, Cypress will not fail the test for uncaught exceptions
    return false;
});
describe('Handling Frames in Cypress', function () {
    it('Single Frame Test', function () {
        cy.visit(url);
        cy.frameLoaded('#frame1', { timeout: 10000 }); // Ensure correct frame identifier
        cy.iframe('#frame1').find('#sampleHeading').then(function (txt) {
            const txtValue = txt.text();
            expect(txtValue).to.contains('This is a sample page');
            cy.log(txtValue);
        });
    });
});
describe('Nested frames in Cypress', function () {
    it('Nested Frame Test', function () {
        cy.visit('https://demoqa.com/nestedframes');
        cy.frameLoaded('#frame1', { timeout: 60000 }); // Identifying the main frame
        cy.iframe('#frame1').then(function ($iframe) { // Switching to the outer frame context
            // Find and interact with elements inside the nested frame
            const frameDocument = $iframe.contents()[0];
            const txtNested = Cypress.$(frameDocument).find('#sampleHeading');
            const txtValue = txtNested.text(); // Get text within the nested frame
            cy.log(txtValue);
        });
    });
});