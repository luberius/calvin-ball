describe("Setting Spec", () => {
  it("The key should not stored when it not saved", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-test='setting-button']").click();

    cy.contains("Settings");
    cy.get("[data-test='input-key']").type("test-key");
    cy.get("[data-test='input-key']").should("have.value", "test-key");

    cy.get("[data-test='setting-close-button']").click();

    cy.get("[data-test='setting-button']").click();

    cy.contains("Settings");
    cy.get("[data-test='input-key']").should("have.value", "");
  });

  it("The key should stored when it saved", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-test='setting-button']").click();

    cy.contains("Settings");
    cy.get("[data-test='input-key']").type("test-key");
    cy.get("[data-test='input-key']").should("have.value", "test-key");

    cy.get("[data-test='setting-save-button']").click();

    cy.get("[data-test='setting-button']").click();

    cy.contains("Settings");
    cy.get("[data-test='input-key']").should("have.value", "test-key");
  });
});
