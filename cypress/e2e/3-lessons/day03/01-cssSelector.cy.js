describe("CSS Selector", () => {
  it("CSS Selector Kullanimi", () => {
    cy.visit("https://www.kitapyurdu.com/");

    //Tag Name
    cy.get("input");

    // Id
    cy.get("#search-input");

    // Class Name
    cy.get(".logo-icon");

    // Attribute Value
    cy.get('[name="search_keyword"]');

    // Class Value
    cy.get('[class="top-menu fr"]');

    // Tag Name ve Attribute Value
    cy.get('input[name="search_keyword"]');
    cy.get('div[name="search_keyword"]');

    // Tag Name ve Multiple Attribute Value
    cy.get('input[name="search-keyword"][type="text"]');
  });
});
