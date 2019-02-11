describe('Employee PUT', () =>{
    let id;
    before(() => {
        cy.request({
          method: 'POST',
          url: '/employees',
          body:{
            first_name: "Before",
            last_name: "Test",
            email: "test@test.test"
          }
        })
        .then((resp) =>{
            cy.log(id = resp.body.id)
        })
      });

  it('should return 200 and update record', () =>{
    cy.request({
        method: 'PUT',
        url: '/employees/' + id,
        body:{
          first_name: "After",
          last_name: "Update",
        }
      })
      .then((resp) =>{
          expect(resp.body.first_name).to.equal("After")
          expect(resp.status).to.eq(200);
        })
  });

  after(() => {
    cy.request({
      method: 'DELETE',
      url: '/employees/' + id
    }).then((resp) =>{
      expect(resp.status).to.eq(200);
    });
  });
})