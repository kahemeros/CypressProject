describe("Environment", () => {
  it("baseUrl'in Environment'ta tanımlanması ve kullanımı", () => {
    cy.visit("/");
    cy.visit("/" + Cypress.env("signin"));
    // config.js içindeki env bölümüne baseUrl ve path parametreleri yazılabileceği gibi çeşitli data'lar (username, password, aranacak kelime vb. - bunları fixture dosyaları içinde tutmak zorunlu değil) da saklanabilir.
  });
});
