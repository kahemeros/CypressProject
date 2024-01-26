describe('Navigasyon', () => {
    it("Browser'da Geri, Ileri ve Yenile butonlarinin Kullanimi", () => {
        cy.visit('https://www.webdriveruniversity.com/'); // Anasayfa
        cy.url().should('include', 'https://www.webdriveruniversity.com/')

        cy.get('#contact-us').invoke('removeAttr', 'target').click(); // Contact Us
        cy.url().should('include', 'Contact-Us')

        cy.go('back') // Anasayfa
        cy.url().should('include', 'https://www.webdriveruniversity.com/')

        cy.go('forward') // Contact Us
        cy.url().should('include', 'Contact-Us')

        cy.go(-1) // Anasayfa
        cy.url().should('not.include', 'Contact-Us')

        cy.go(1) // Contact Us
        cy.url().should('include', 'Contact-Us')

        cy.reload()
        cy.reload(true)
        // reload() metodu icerisinde true degeri kullanilirsa bellekteki verileri kullanmadan yenileme yapar
    });
});