describe("Eylem Metotları - rightclick() Metodu", () => {
  it("rightclick() Metodunun Kullanımı", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://demoqa.com/buttons");

    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should("be.visible").and("exist").and("have.text", "You have done a right click");

    // click() metoduyla birlikte kullandığımız özellikleri rightclick() metoduyla birlikte de kullanabiliriz.
  });
});
