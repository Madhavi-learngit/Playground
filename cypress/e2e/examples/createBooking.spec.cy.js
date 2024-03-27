describe('API Testing', () => {
    it('Create a new booking', () => {
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: {
          firstname: "Jim",
          lastname: "Brown",
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
          },
          additionalneeds: "Breakfast"
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  



           