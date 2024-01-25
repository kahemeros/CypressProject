/*
    https://automationteststore.com adresini ziyaret et
    Login ol
    Login Name = techpro
    Password = techpro!
    "Login" butonuna tıkla    
    "Edit account details" butonuna tıkla
    Formdaki dolu olan alanları temizle
*/

describe("Uygulama-05 Ödev", () => {
  it("Eylem Komutlarının Kullanımı", () => {
    // https://automationteststore.com adresini ziyaret et
    const loginName = "techpro";
    const password = "techpro!";
    const name = "Cypress";
    const lastName = "is the best";
    const email = "cypressisthebest@gmail.com";

    cy.visit("https://automationteststore.com");
    // Login ol Login Name: techpro, Password: techpro!
    cy.contains("Login or register").click();
    cy.get("#loginFrm").within(() => {
      cy.get("#loginFrm_loginname").type(loginName);
      cy.get("#loginFrm_password").type(password);
      //"Login" butonuna tıkla
      cy.get("[title='Login']").click();
    });
    // "Edit account details" butonuna tıkla
    cy.get("[class='nav-dash']").find("[data-original-title='Edit account details']").click();
    // Formdaki dolu olan alanları temizle ve doldur
    cy.get("#AccountFrm_firstname").clear().type(name);
    cy.get("#AccountFrm_lastname").clear().type(lastName);
    cy.get("#AccountFrm_email").clear().type(email);
    cy.get("[title='Continue']").click();
    // Account bilgilerinin güncellendiğini doğrula
    cy.get(".alert-success").should("contain", "Success: Your account has been successfully updated.");
  });
});
