describe("Practice Form", () => {
  it("task_1_test_2", () => {
    // Go to https://demoqa.com/
    cy.visit("https://demoqa.com/");
    // Click on forms
    cy.contains("Forms").click();
    // Click on Practice Form
    cy.contains("Practice Form").click();
    // Check male
    cy.get("#gender-radio-1").check({ force: true });
    // Assert if male is checked
    cy.get("#gender-radio-1").should("be.checked");
    // Assert if female is not checked
    cy.get("#gender-radio-2").should("not.be.checked");
    // Check female
    cy.get("#gender-radio-2").check({ force: true });
    // Assert if female is checked
    cy.get("#gender-radio-2").should("be.checked");
    // Assert if male is not checked
    cy.get("#gender-radio-1").should("not.be.checked");
  });
});
