describe('API Testing', () => {
    it('should return list of users', () => {
           cy.request('GET','https://restful-booker.herokuapp.com/ping')
           .then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.length.above(0);
    });
    });
    });