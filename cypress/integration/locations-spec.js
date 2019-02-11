describe('Locations endpoint', () => {

    it('should return 200 with no authentication', () => {
      cy.request({
        url: '/locations',
      })
      .then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  
    it.skip('should return a valid schema', () =>{
      //TODO
    })
  
    it('should return in under 1 second', () => {
      cy.request({
        url: '/locations',
        timeout: 1000
      })
      .then((resp) => {
        expect(resp.status).to.eq(200);
      });
    })
  
    it('should return 201 with a valid post', () => {
      cy.request({
        method: 'POST',
        url: '/locations',
        timeout: 1000,
        body:{
          city: "City",
          state: "State",
        }
      })
      .then((resp) => {
        expect(resp.status).to.eq(201);
      });
    });
  });