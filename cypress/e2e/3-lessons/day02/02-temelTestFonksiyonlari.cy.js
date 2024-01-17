describe("Temel Test Fonksiyonları", () => {
  it("visit(), get(), click(), type(), should() fonksiyonlarının kullanımı", () => {
    cy.visit("URL");
    // visit() fonksiyonu bir URL'yi ziyaret etmek için kullanılır.
    cy.get("locator").should(be.visible).click();
    // get() fonksiyonu 1 veya 1'den çok elementi seçmek (locate almak) için kullanılır (Selenium'daki findElement(), findElements() ayrımına gerek yok.)
    // be.visible --> linkin görünebilir olduğunu doğrulama
    // click() fonksiyonu ise belirli bir elemente tıklamak için kullanılır.
    cy.get("locator").should("Doğrulayıcı", "").type("Metin").should("Doğrulayıcı", "Doğrulanacak Metin"); // (Expected Result, Actual Result)
    // type() fonksiyonu belirli bir input veya textarea alanına (String veya sayı) bir veri girmek için kullanılır
    // should() fonksiyonu belirli bir koşulu doğrulamak için kullanılır.
  });
});
