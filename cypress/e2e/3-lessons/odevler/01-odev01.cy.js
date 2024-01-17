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
    // İletişim Formunu doldur
    cy.get('[name="first_name"]').type("Cypress");
    cy.get('input[name="last_name"]').type("is the Best");
    cy.get('input[name="email"]').type("cypress@gmail.com");
    cy.get('textarea[name="message"]').type("Never mind the rest");
    // "SUBMIT" butonuna tıkla
    cy.get('input[value="SUBMIT"]').click();
    // Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
    cy.get('h1').should('contain', 'Thank You for your Message!');
    
  });
});
