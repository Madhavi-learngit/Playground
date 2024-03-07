declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to log in a user.
       * @example cy.login('username', 'password')
       */
      login(user: string, password: string): Chainable<any>
    }
  }
  