describe("Sensitive data bad practice", () => {
  beforeEach(() => {
    cy.visit("https://notes-serverless-app.com/login");
  });

  it("fills the form with sensitive data", () => {
    cy.get("#email").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"), { log: false });
  });
});
