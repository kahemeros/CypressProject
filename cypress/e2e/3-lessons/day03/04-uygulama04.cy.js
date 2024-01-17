describe("Uygulama-04", () => {
  it("XPath Kullanımı", () => {
    /*
        https://www.kitapyurdu.com sitesine git
        'Üye Ol' bağlantısına tıkla
        Kayıt formunda 'Ad' alanına değer yaz ve doğrula
        */

    // https://www.kitapyurdu.com sitesine git
    cy.visit("https://www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu");
    cy.title().should("contain", "Kitapyurdu");

    // 'Üye Ol' bağlantısına tıkla
    cy.xpath('//a[text()="Üye Ol"]').click();

    // Kayıt formunda 'Ad' alanına değer yaz ve doğrula
    cy.xpath('//input[@id="register-name"]').type("Cypress").should("have.value", "Cypress");
  });
});
