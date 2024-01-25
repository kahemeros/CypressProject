describe('Eylem Metotları - scrollIntoView() Metodu', () => {
    it('scrollIntoView() Metodunun Kullaniımı', () => {
        cy.visit('https://www.webdriveruniversity.com/');

        // Hızlı Scroll
        cy.get('#actions').scrollIntoView()

        // Yavaş Scroll
        cy.get('#contact-us').scrollIntoView({duration:2000})

    });
});