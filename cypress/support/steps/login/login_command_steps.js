/* global Given, Then, When */

When ("realizo login com ariellemattos e 101010", () => {
    cy.login('ariellemattos', '101010')
})

And ("clico no botão de login", () => {
    cy.clickButtonLogin()
})

Then ("devo ver a mensagem de Bem vindo", () => {
    cy.assertLogin('Bem vindo, Arielle')
})