describe("Kitapyurdu Kayıt", () => {
  it("US01TC01 Kullanıcı geçerli bilgilerle siteye kayıt yapabilmeli", () => {
    cy.visit("www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu.com");
    cy.get("a[href='https://www.kitapyurdu.com/index.php?route=account/register']").click();
    cy.title().should("eq", "Hesap Oluştur");
    cy.get('input[id="register-name"]').type("Mehmet");
    cy.get('input[id="register-lastname"]').type("Aydın");
    cy.get('input[id="register-email"]').type("tyheir21.amara@falkcia.com");
    cy.get('input[id="register-password"]').type("12345678");
    cy.get('input[id="register-password-confirm"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.contains("Hesabınız Oluşturuldu!").should("have.text", "Hesabınız Oluşturuldu!");
  });
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
  it("US01TC03 Soyad kutusu boş bırakılmamalı", () => {
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
  it("US01TC04 Eposta Adresi kutusu boş bırakılmamalı", () => {
    cy.visit("www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu.com");
    cy.get("a[href='https://www.kitapyurdu.com/index.php?route=account/register']").click();
    cy.title().should("eq", "Hesap Oluştur");
    cy.get('input[id="register-name"]').type("Mehmet");
    cy.get('input[id="register-lastname"]').type("Aydın");
    cy.get('input[id="register-password"]').type("12345678");
    cy.get('input[id="register-password-confirm"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.get("span[class='ky-error-input']").should("contain", "Geçerli bir E-Posta adresi yazınız!");
  });
  it("US01TC05 Şifre kutusu boş bırakılmamalı", () => {
    cy.visit("www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu.com");
    cy.get("a[href='https://www.kitapyurdu.com/index.php?route=account/register']").click();
    cy.title().should("eq", "Hesap Oluştur");
    cy.get('input[id="register-name"]').type("Mehmet");
    cy.get('input[id="register-lastname"]').type("Aydın");
    cy.get('input[id="register-password-confirm"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.get("span[class='ky-error-input']").should("contain", "Şifreniz 8 ile 20 karakter arasında olmalı!");
  });
  it.only("US01TC06 Şifre tekrarı kutusu boş bırakılmamalı", () => {
    cy.visit("www.kitapyurdu.com");
    cy.url().should("include", "kitapyurdu.com");
    cy.get("a[href='https://www.kitapyurdu.com/index.php?route=account/register']").click();
    cy.title().should("eq", "Hesap Oluştur");
    cy.get('input[id="register-name"]').type("Mehmet");
    cy.get('input[id="register-lastname"]').type("Aydın");
    cy.get('input[id="register-password"]').type("12345678");
    cy.get(":nth-child(7) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get(":nth-child(8) > .ky-form-check-label > .ky-checkbox-input").click();
    cy.get("#cookiescript_accept").click();
    cy.get("button[role='button']").click();
    cy.get("span[class='ky-error-input']").should("contain", "Şifreniz birbiriyle uyuşmuyor!");
  });
});
