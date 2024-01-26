describe('Iframe', () => {
    it('Iframe eklentisi ile calismak', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.get('h3').should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor')

        cy.frameLoaded('#mce_0_ifr') // frameLoaded() metodu ile sayfadaki iframe alani tanimlanir
        cy.iframe().find('p').clear() // iframe() metodu ile yukarida tanimlanan iframe icerisine girilir
        cy.iframe().find('p').type('Cypress')

        cy.get('h3').should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor')

    });
});