/*
    Given
        Web sitesine git (www.kitapyurdu.com)
    When    
        Üye Ol linkine tıkla
    And    
        Ad kutusuna bir veri gir (Mehmet)
    And    
        Soyad kutusuna bir veri gir (Aydın)
    And    
        Eposta Adresi kutusuna bir veri gir (www.fakemail.com)
    And    
        Şifre kutusuna bir şifre gir (12345678)
    And    
        Şifre tekrarı kutusuna aynı şifreyi gir (12345678)
    And    
        "Kişisel Verilerin Korunması metnini okudum ve kabul ediyorum" kontrol kutusuna tıkla
    And    
        Üye Ol butonuna tıkla
    Then    
        Kayıt işleminin gerçekleştiğini doğrula
*/

describe("Kitapyurdu Kayıt", () => {
  it("US01TC01 Kullanıcı geçerli bilgilerle siteye kayıt yapabilmeli", () => {
    cy.visit("www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu.com");
    cy.get("a[href='https://www.kitapyurdu.com/index.php?route=account/register']").click();
    cy.title().should("eq", "Hesap Oluştur");
    cy.get('input[id="register-name"]').type("Mehmet");
    cy.get('input[id="register-lastname"]').type("Aydın");
    cy.get('input[id="register-email"]').type("harmon.blayse@falkcia.com");
    cy.get('input[id="register-password"]').type("12345678");
    cy.get('input[id="register-password-confirm"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.contains("Hesabınız Oluşturuldu!").should("have.text", "Hesabınız Oluşturuldu!");
  });
});
