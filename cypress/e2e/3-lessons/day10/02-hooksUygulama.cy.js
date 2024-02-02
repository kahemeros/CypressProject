describe("Hooks Uygulama", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.fixture("orangeHrm").then((loginCredentials) => {
      cy.get("[name='username']").type(loginCredentials.username);
      cy.get("[name='password']").type(loginCredentials.password);
      cy.get("[type='submit']").click();
    });
  });
  it("Sitede Admin paneline girme testi", () => {
    cy.contains("Admin").click();
    cy.get(".oxd-topbar-header-title").should("contain", "Admin");
  });
  it("Sitede PIM paneline girme testi", () => {
    cy.contains("PIM").click();
    cy.get(".oxd-topbar-header-title").should("contain", "PIM");
  });
  it("Sitede Recruitment paneline girme testi", () => {
    cy.contains("Recruitment").click();
    cy.get(".oxd-topbar-header-title").should("contain", "Recruitment");
  });
});
