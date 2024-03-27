describe('Delete Booking', () => {
    let token;
    before(() => {
        // Fetch or generate your token here and assign it to the token variable
        // Example: token = 'your_token_value';
        token ='1fbaa787f8c7eef'; // Assign a valid token here
    });
    it('Delete a booking', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://restful-booker.herokuapp.com/booking/240',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            // Assert on response status
            expect(response.status).to.equal(204);
        });
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    






































    