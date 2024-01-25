describe("Eylem Metotları - dblclick() Metodu", () => {
  it("dblclick() Metodunun Kullanımı", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://demoqa.com/buttons");

    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should("be.visible").and("exist").and("have.text", "You have done a double click");

    // click() metoduyla birlikte kullandığımız özellikleri dblclick() metoduyla birlikte de kullanabiliriz.
  });
});
