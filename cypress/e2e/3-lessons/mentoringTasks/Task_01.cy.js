describe("Practice Form", () => {
  it("task_1_test_1", () => {
    const firstName = "Cypress";
    const lastName = "is the best";
    // Go to https://demoqa.com
    cy.visit("https://demoqa.com/");
    // Click on Forms
    cy.contains("Forms").click();
    // Click on Practice Form
    cy.contains("Practice Form").click();
    // Type first name as your name
    cy.get("#firstName").type(firstName)
      // Assert if it is visible
      .should("be.visible")
      // Assert if it has value as your name
      .should("have.value", firstName);
    // Type last name as your last name
    cy.get("#lastName")
      .type(lastName)
      // Assert if it exists
      .should("exist")
      // Assert if it has value as your name
      .should("have.value", lastName)
      // Assert if it doesn't have your first name 
      .should("not.have.value", firstName);
  });
});
