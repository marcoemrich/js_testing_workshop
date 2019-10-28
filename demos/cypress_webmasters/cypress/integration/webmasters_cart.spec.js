/// <reference types="Cypress" />

describe('webmasters cart', function() {
  it('should show a total price', function() {
    cy.visit('https://www.webmasters-fernakademie.de/fernkurse')

    // cy.contains('OK').click();

    cy.get('ul.course_list li:first-child() .special_button').click();

    console.log("Hallo 1");


    cy.get('form > .special_button').click()

    console.log("Hallo 2");


    cy.get('tr:last-child td.text_right')
      .invoke('text')
      .should('to.match', /\d+.\d+,00/)

  })
})