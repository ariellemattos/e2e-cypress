
Cypress.Commands.add("login", (username, password) => { 
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.btn-login').click()
})

Cypress.Commands.add("assertLogin", (message) => {
    cy.get('.welcome > strong').contains(message)
})


