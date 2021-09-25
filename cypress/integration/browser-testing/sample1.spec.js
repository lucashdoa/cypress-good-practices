describe("Browser testing bad practice - Sample 1", () => {
  beforeEach(() => {
    cy.visit("https://notes-serverless-app.com");
  });

  it("Exercise: directs the user to the login page when clicking the login link", () => {
    // cy.contains('.nav a', 'Login').click()
    // cy.url().should('be.equal', 'https://notes-serverless-app.com/login')
    cy.contains(".nav a", "Login").should("not.have.attr", "target");
    cy.contains(".nav a", "Login")
      .invoke("attr", "href")
      .should("be.equals", "/login");
  });

  it("Response: directs the user to the login page when clicking the login link", () => {
    cy.contains(".nav a", "Login")
      .should("have.attr", "href", "/login")
      .and("not.have.attr", "target");
  });
});
