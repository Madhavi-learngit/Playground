describe('verify h1 header', () => {
 it('h1 header visible', () => {
  
      cy.visit('https://example.cypress.io')
      cy.get ("h1").contains ("Kitchen Sink")
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click();
      cy.get('#query-btn').should('contain', 'Button').click();
      cy.visit('https://example.cypress.io')
      cy.get('.home-list > :nth-child(3) > :nth-child(1)').click();
      cy.get('.action-email')
     .type('fake@email.com').should('have.value', 'fake@email.com')
      cy.get('#password1')
     .type('Sriram').should('have.value', 'Sriram')
    
    })
  })
  