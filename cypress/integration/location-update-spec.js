describe("Location PUT", () => {
    let id;
    before(() => {
        cy.request({
          method: 'POST',
          url: '/locations',
          body:{
            city: "City",
            state: "State",
          }
        })
        .then((resp) =>{
            cy.log(id = resp.body.id)
        })
    });

    it("should return 200 and update record", () => {
        cy.request({
            method: 'PUT',
            url: '/locations/' + id,
            followRedirect: false,
            timeout: 1000,
            body:{
              city: "Change",
            }
          })
          .then((resp) =>{
              expect(resp.body.city).to.equal("Change")
              expect(resp.status).to.eq(200);
            })
          .then(() =>{
            cy.request({
              url: '/locations/' + id
            })
            .then((resp) => {
              expect(resp.body.city).to.equal("Change")
              expect(resp.body.state).to.equal("State")
              expect(resp.body.id).to.equal(id)
            });
          });

    })
})