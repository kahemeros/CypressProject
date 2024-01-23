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
  it("AutomationTestStore Kullanıcı Hesap Bilgilerinin Editlenmesi", () => {
    // https://automationteststore.com adresini ziyaret et
    cy.visit("https://automationteststore.com");
    // Login ol Login Name: techpro, Password: techpro!
    cy.contains("Login or register").click();
    cy.get("#loginFrm_loginname").type("techpro");
    cy.get("#loginFrm_password").type("techpro!");
    //"Login" butonuna tıkla
    cy.get("[title='Login']").click();
    // "Edit account details" butonuna tıkla
    cy.get("[class='nav-dash']").find("[data-original-title='Edit account details']").click();
    // Formdaki dolu olan alanları temizle
    cy.get("#AccountFrm_firstname").clear();
    cy.get("#AccountFrm_firstname").type("Cypress");
    cy.get("#AccountFrm_lastname").clear();
    cy.get("#AccountFrm_lastname").type("is the best");
    cy.get("#AccountFrm_email").clear();
    cy.get("#AccountFrm_email").type("cypressisthebest@gmail.com");
    cy.get("button[title='Continue']").click();
    cy.get("[class='alert alert-success']").should("contain", "Success: Your account has been successfully updated.");
  });
});
