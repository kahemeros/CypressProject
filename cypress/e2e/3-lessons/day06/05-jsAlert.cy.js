describe("Alert", () => {
  it("Alert mesajını doğrulamak", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get('[onclick="jsAlert()"]').click();

    cy.on("window:alert", (mesaj) => {
      // window:alert'teki mesajı (mesaj) değişkenine yükledik. (mesaj) => içinde "I am a JS Alert" var.
      expect(mesaj).to.equal("I am a JS Alert");
      // alert handling için cy.on ve cy.window metotları kullanılır.
      // alert mesajını kontrol etmek için cy.on("window:alert") kullanılır.
      // doğrulama için should yerine expect kullandık
      // çünkü should yalnızca chain olduğu durumda çalışır.
    });
  });

  it("Alert mesajında İptal butonuna basmak", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get('[onclick="jsConfirm()"]').click();

    cy.on("window:confirm", () => {
      return false;
      // cypress, alert'teki tamam butonuna default olarak tıklar
      // eğer iptal (cancel) butonuna tıklamak istersek cy.on("window:confirm") kullanılır.
      // false değeri iptal butonuna otomatik olarak basar
      // true değeri tamam butonuna otomatik olarak basar
    });
  });

  it.only("Alert Prompt alanına metin girmek", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((AlertPenceresi) => {
      cy.stub(AlertPenceresi, "prompt").returns("Cypress");
      cy.get('[onclick="jsPrompt()"]').click();
    });
    // 35. satırdaki kod ile (cy.stub()...) Alert penceresindeki prompt alanına mesaj yazdık.
  });
});
