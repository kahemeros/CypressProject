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
    cy.get('input[id="register-email"]').type("tyheir.amara@falkcia.com");
    cy.get('input[id="register-password"]').type("12345678");
    cy.get('input[id="register-password-confirm"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.contains("Hesabınız Oluşturuldu!").should("have.text", "Hesabınız Oluşturuldu!");
  });
  /*
      Given
          Web sitesine git (www.kitapyurdu.com)
      When    
          Üye Ol linkine tıkla
      And    
          Ad kutusunu boş bırak
      And    
          Soyad kutusuna bir veri gir (Aydın)
      And    
          Eposta Adresi kutusuna bir veri gir (random email adres)
      And    
          Şifre kutusuna bir şifre gir (12345678)
      And    
          Şifre tekrarı kutusuna aynı şifreyi gir (12345678)
      And    
          "Kişisel Verilerin Korunması metnini okudum ve kabul ediyorum" kontrol kutusuna tıkla
      And    
          Üye Ol butonuna tıkla
      Then    
          Kayıt işleminin gerçekleşmediğini doğrula
      */
  it("US01TC02 Ad kutusu boş bırakılmamalı", () => {
    cy.visit("www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu.com");
    cy.get("a[href='https://www.kitapyurdu.com/index.php?route=account/register']").click();
    cy.title().should("eq", "Hesap Oluştur");
    cy.get('input[id="register-lastname"]').type("Aydın");
    cy.get('input[id="register-email"]').type("tyheir.amara@falkcia.com");
    cy.get('input[id="register-password"]').type("12345678");
    cy.get('input[id="register-password-confirm"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.contains("Ad alanı 2 ile 30 karakter arasında olmalı!").should(
      "contain",
      "Ad alanı 2 ile 30 karakter arasında olmalı!"
    );
  });
  /*
    Given
        Web sitesine git (www.kitapyurdu.com)
    When
        Üye Ol linkine tıkla
    And 
        Ad kutusuna bir veri gir (Mehmet)
    And  
        Soyad kutusunu boş bırak
    And  
        Eposta Adresi kutusuna bir veri gir (random email adresi)
    And   
        Şifre kutusuna bir şifre gir (12345678)
    And  
        Şifre tekrarı kutusuna aynı şifreyi gir (12345678)
    And  
        "Kişisel Verilerin Korunması metnini okudum ve kabul ediyorum" kontrol kutusuna tıkla
    And  
        Üye Ol butonuna tıkla
    Then 
        Kayıt işleminin gerçekleşmediğini doğrula
    */
  it.only("US01TC03 Soyad kutusu boş bırakılmamalı", () => {
    cy.visit("www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu.com");
    cy.get("a[href='https://www.kitapyurdu.com/index.php?route=account/register']").click();
    cy.title().should("eq", "Hesap Oluştur");
    cy.get('input[id="register-name"]').type("Mehmet");
    cy.get('input[id="register-email"]').type("tyheir.amara@falkcia.com");
    cy.get('input[id="register-password"]').type("12345678");
    cy.get('input[id="register-password-confirm"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.get("span[class='ky-error-input']").should("contain", "Soyad alanı 2 ile 30 karakter arasında olmalı!");
  });
});
