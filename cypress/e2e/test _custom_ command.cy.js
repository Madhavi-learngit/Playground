describe('description', () => {
it('Log in', () => {
cy.visit("https://www.saucedemo.com");
cy.login("standard_user","secret_sauce");
})
});
