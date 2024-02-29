

describe('My website Test', () => {
    it('should visit the homepage', () => {
        function launchApplication() {
            const url = 'https://demo.applitools.com';
            cy.visit(url);
        }
        function login(username, password) {
            cy.get('#username').type(username);
            cy.get('#password').type(password);
        }
        function clickLoginButton() {
            cy.get('#log-in').click();
        }
        function verifyLoginSuccessful() {
            // Assuming there's some element to verify if the login is successful
            cy.get('.content-box').should('be.visible');
        }
        // Test case
        launchApplication();
        login('Madhavi', 'learncode#2');
        clickLoginButton();
        verifyLoginSuccessful();
    });
});













