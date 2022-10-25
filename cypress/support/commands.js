Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Andrea')
    cy.get('#lastName').type('Mitsuoka')
    cy.get('#email').type('andrea.mitsu@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')

})