describe("Eylem Metotları - select() Metodu", () => {
  it("select() Metodunun Kullanımı", () => {
    cy.visit("https://www.letskodeit.com/practice");

    // Metin ile seçim yapma
    cy.get("#carselect").select("Benz");
    cy.wait(1000);

    // Value ile seçim yapma
    cy.get("#carselect").select("honda");
    cy.wait(1000);

    // Index ile seçim yapma
    cy.get("#carselect").select(0);
    cy.wait(1000);

    // Seçili olanı bulma
    cy.get("#carselect option:selected").should("have.text", "BMW");
    // dropdown menünün locate'inin yanına option:selected komutunu eklediğimizde, seçili olan option'ı verir.

    // Metin ile çoklu seçim yapma
    cy.get("#multiple-select-example").select(["Apple", "Orange"]);

    // Value ile coklu secim yapma
    cy.get("#multiple-select-example").select(["apple", "orange"]);

    // Index ile coklu secim yapma
    cy.get("#multiple-select-example").select([1, 2]);
  });
});
