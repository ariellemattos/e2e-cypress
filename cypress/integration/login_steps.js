describe('Login', () => {

    beforeEach(() => {
        cy.visit("http://webpopcorn.herokuapp.com/")
    })

    it('Login sucesso', () => {
        cy.get('#username').type('ariellemattos')
        cy.get('#password').type('101010')
        cy.get('.btn-login').click()
        cy.get('.welcome > strong').contains('Bem vindo, Arielle')
    })

    it('Login com usuario incorreto', () => {
        cy.get('#username').type('arielle')
        cy.get('#password').type('101010')
        cy.get('.btn-login').click()
        cy.get('.swal-modal').contains('Incorrect email or password!')
    })

    it('Login com senha incorreto', () => {
        cy.get('#username').type('ariellemattos')
        cy.get('#password').type('111')
        cy.get('.btn-login').click()
        cy.get('.swal-modal').contains('Incorrect email or password!')
    })

    it('Login usando command', () => {
        cy.login('arielle.mattos', 'qaxperience@2020')
        cy.assertLogin('Bem vindo, Arielle')
    })
})