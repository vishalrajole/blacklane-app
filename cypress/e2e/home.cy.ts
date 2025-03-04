describe("Home Page", () => {
  it("should load the home page", () => {
    cy.visit("/");
    cy.contains("Vite + React").should("be.visible");
  });
});
