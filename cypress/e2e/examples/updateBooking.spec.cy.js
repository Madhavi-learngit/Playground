describe('Update Booking', () => {
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
  
    it('Update a booking', () => {
      // Ensure token is obtained before making the request
      cy.wrap(token).should('not.be.undefined');
      // Perform the PUT request to update the booking
      cy.request({
        method: 'PUT',
        url: 'https://restful-booker.herokuapp.com/booking/:739',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: {
          firstname: 'James',
          lastname: 'Brown',
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: '2018-01-01',
            checkout: '2019-01-01'
          },
          additionalneeds: 'Breakfast'
        }
      }).then((response) => {
        // Assert on response status
        expect(response.status).to.equal(200);
        // Assert on updated booking details
        expect(response.body).to.deep.equal({
          firstname: 'James',
          lastname: 'Brown',
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: '2018-01-01',
            checkout: '2019-01-01'
          },
          additionalneeds: 'Breakfast'
        });
      });
    });
  });

  
  
  
  
  
  
  