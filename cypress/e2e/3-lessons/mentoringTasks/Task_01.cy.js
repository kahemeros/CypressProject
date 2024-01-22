describe("Practice Form", () => {
  it("task_1_test_1", () => {
    const firstName = "Cypress";
    const lastName = "is the best";
    cy.visit("https://demoqa.com/");
    cy.contains("Forms").click();
    cy.contains("Practice Form").click();
    cy.get("#firstName").type(firstName).should("be.visible").should("have.value", firstName);
    cy.get("#lastName")
      .type(lastName)
      .should("be.visible")
      .should("have.value", lastName)
      .should("not.have.value", firstName);
  });
});
