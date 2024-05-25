beforeEach(()=>
    {
        //import login data to be used during the testing
        cy.fixture('loginData.json').then(function(data)
        {
    this.data=data
        })
    });