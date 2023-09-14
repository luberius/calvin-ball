describe("chat spec", () => {
  const prompt = "How to cook potato?";

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const typePrompt = () => {
    cy.get("[data-test='chat-input-box']").type(prompt);
    cy.get("[data-test='chat-input-box']").should("have.value", prompt);
    cy.get("[data-test='chat-send-button']").click();
  };

  it("User able to type & send the prompt", () => {
    typePrompt();
    cy.get("[data-test='chat-list-container']")
      .get(".user-chat")
      .eq(-1)
      .contains(prompt);
  });

  it("assistance able to return key error when the key is empty", () => {
    typePrompt();
    cy.get("[data-test='chat-list-container']")
      .get(".assistance-chat")
      .eq(-1)
      .contains("Key is empty");
  });
});
