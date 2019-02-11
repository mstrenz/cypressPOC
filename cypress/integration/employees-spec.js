describe('Employees endpoint', () => {

  it('should return 200 with no authentication', () => {
    cy.request({
      url: '/employees',
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
      url: '/employees',
      timeout: 1000
    })
    .then((resp) => {
      expect(resp.status).to.eq(200);
    });
  })

  it('should return 201 with a valid post', () => {
    cy.request({
      method: 'POST',
      url: '/employees',
      body:{
        first_name: "First",
        last_name: "Last",
        email: "test@test.test"
      }
    })
    .then((resp) => {
      expect(resp.status).to.eq(201);
    });
  });
});