const { faker } = require("@faker-js/faker");

let fakeName = faker.person.firstName()
let fakeLastName = faker.person.lastName()
let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()

describe('FakerJS Kullanimi', () => {
    it('FakerJS ile Ornek Test', () => {
        cy.visit('https://www.kitapyurdu.com/index.php?route=account/register');

        cy.get('#register-form').within(() => {
            cy.get('#register-name').type(fakeName)
            cy.get('#register-lastname').type(fakeLastName)
            cy.get('#register-email').type(fakeEmail)
            cy.get('#register-password').type(fakePassword)
            cy.get('#register-password-confirm').type(fakePassword)
        })

    });

    it.only('Eposta Validation Mesajinin dogrulanmasi', () => {
        cy.visit('https://www.automationexercise.com/login');

        cy.get('[data-qa="login-email"]').type(fakeName)
        cy.get('[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()

        cy.get('[data-qa="login-email"]')
            .invoke('prop', 'validationMessage')
            .should('eq', `Lütfen e-posta adresine bir "@" işareti ekleyin. "${fakeName}" adresinde "@" eksik.`)
    });
});