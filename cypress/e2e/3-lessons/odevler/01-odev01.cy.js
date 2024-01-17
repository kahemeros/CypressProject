/*
Aşağıdaki testi CSS Selector kullanarak yapınız.
    1. https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
    2. İletişim Formunu doldur
    3. "SUBMIT" butonuna tıkla
    4. Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
*/

describe("Uygulama-03-Odev", () => {
  it("CSS Selector Kullanimi", () => {
    // https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.url(); // https://www.webdriveruniversity.com/Contact-Us/contactus.html
    cy.url().should("include", "contactus");
    cy.url().should("eq", "https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // url() fonksiyonu mevcut sayfanın url'sini kontrol etmek için kullanılır.
    // 'eq' / 'equal' eşit anlamına gelir ve iki değeri karşılaştırmak için kullanılır.
    cy.title().should("contain", "Contact Us"); // WebDriver |Contact Us
    // title() fonksiyonu mevcut sayfanın başlığını kontrol etmek için kullanılır.
    // url() ve title() fonksiyonları genellikle test case'lerde yer almaz ama bunları test etmek gerekli olabilir.

    // İletişim Formunu doldur
    cy.get('[name="first_name"]').type("Cypress");
    cy.get('input[name="last_name"]').type("is the Best");
    cy.get('input[name="email"]').type("cypress@gmail.com");
    cy.get('textarea[name="message"]').type("Never mind the rest");

    // "SUBMIT" butonuna tıkla
    cy.get('input[value="SUBMIT"]').click();

    // Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
    cy.get("h1").should("have.text", "Thank You for your Message!");
    // have.text bir elemente ait metnin, beklenen metinle eşit olup olmadığını kontrol eder.
    /*
    cy.get('h1').should('contain', 'Thank You');
    contain, have.text'ten farklı olarak metnin tamamını değil, bir kısmını kontrol etmeyi sağlar.
    */
  });
});
