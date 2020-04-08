/* global Given, Then, When */

When ("realizo login com ariellemattos e 1111", () => {
    cy.get('#username').type('ariellemattos')
    cy.get('#password').type('1111')
})

And ("clico no botão de login", () => {
    cy.get('.btn-login').click()
})

Then ("devo ver a mensagem de Usuario ou senha incorretos", () => {
    cy.get('.swal-modal').contains('Incorrect email or password!')
})