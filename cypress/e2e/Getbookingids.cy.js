describe('Get Booking IDs', () => {
    let token;
  
    before(() => {
      // Perform authentication to obtain Bearer Token
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        body: {
          username: 'admin',
          password: 'password123'
        }
      }).then((response) => {
        // Ensure successful authentication
        // Extract Bearer Token from response body
        token = response.body.token;
        expect(token).to.not.be.undefined; // Ensure token is obtained
      });
    });
  
    it('Get all booking IDs', () => {
      // Ensure token is obtained before making the request
      cy.wrap(token).should('not.be.undefined');
  
      // Perform the GET request to retrieve all booking IDs
      cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        // Assert on response status
        expect(response.status).to.equal(200);
  
        // Extract booking IDs from the response body
        const bookingIds = response.body.map(booking => booking.bookingid);
  
        // Log the retrieved booking IDs
        cy.log('Retrieved Booking IDs:', bookingIds);
        
        // You can add further assertions or manipulations here based on your requirements
      });
    });
  });
  