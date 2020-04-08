/* global Given, Then, When */

Given("acesso a pagina de login", () => {
    cy.visit('http://webpopcorn.herokuapp.com/')
})

When("realizo login com ariellemattos e 101010", () => {
    cy.get('#username').type('ariellemattos')
    cy.get('#password').type('101010')
})

And ("clico no botão de login", () => {
    cy.get('.btn-login').click()
})

Then ("devo ver a mensagem de Bem vindo", () => {
    cy.get('.welcome > strong').contains('Bem vindo, Arielle')
})