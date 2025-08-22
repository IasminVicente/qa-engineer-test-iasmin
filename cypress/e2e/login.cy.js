describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('/login')

    // Preenche usuário e senha
    cy.get('[data-test="username"]').type(Cypress.env('username'))
    cy.get('[data-test="password"]').type(Cypress.env('password'))

    // Clica no botão Acessar
    cy.contains('button', 'Acessar').click()

    // Valida se realmente o logi foi feito
    cy.contains('span', 'menu').click()
    cy.contains('div', 'iasminvicente2').should('be.visible')

    cy.url().should('not.include', '/login')
  })
})

