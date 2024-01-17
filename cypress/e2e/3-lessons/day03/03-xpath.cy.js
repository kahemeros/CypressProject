describe("XPath", () => {
  it("XPath ile locate alma", () => {
    cy.visit("https://www.kitapyurdu.com");

    // Tag Name
    cy.xpath("//input");

    // Attribute Value
    cy.xpath("//*[@id='search-input]");

    // Tag Name ve Attribute Value
    cy.xpath("//input[@id='search-input]");

    // Full Text Value
    cy.xpath("//a[text()='Giriş Yap']"); // a tag'ı yerine * da koyabilirdik ama tagname yazmak aramayı hızlandırır, bu yüzden ekledik

    // Contains Text Value
    cy.xpath("//a[.='Giriş Yap']");

    // Multiple Attribute Value
    cy.xpath("//*[@id='search-input' and @name='search-keyword']");
  });
});
