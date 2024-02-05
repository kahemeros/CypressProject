describe("Custom Command", () => {
  it("Magento - Arama Motoru Testi", () => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.magentoSearch("Tanks for men")
  });
});
