/*
https://www.amazon.com sitesine git    
Arama motorunda 'iphone' kelimesini ara
Arama sonuç sayfasında 'iphone' kelimesinin arandığını doğrula    
*/
describe("Uygulama-02", () => {
  it("Temel Fonksiyonların Kullanımı", () => {
    // https://www.amazon.com sitesine git
    cy.visit("https://www.amazon.com");
    // Arama motorunda 'iphone' kelimesini ara
    cy.get("#twotabsearchtextbox").type("iphone").should('have.value', 'iphone'); // input alanlarına yazılan metinler her zaman have.value methodu ile doğrulanabilir.
    cy.get("#nav-search-submit-button").click();
    // Arama sonuç sayfasında 'iphone' kelimesinin arandığını doğrula
    cy.get(".sg-col-14-of-20 > .sg-col-inner > .a-section").should("contain", "iphone");
  });
});
