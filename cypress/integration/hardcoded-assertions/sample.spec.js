describe("Hardcoded assertion bad practice", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/search**", { fixture: "stories" }).as("getStories");

    cy.visit("https://hackernews-seven.vercel.app");
    cy.wait("@getStories");
  });

  it("exercise", () => {
    cy.search("cypress.io");
    cy.wait("@getStories");

    cy.fixture("stories").then((stories) => {
      console.log(stories);
      cy.get(".table-row")
        .as("tableRows")
        .should("have.length", stories.hits.length);
      stories.hits.forEach((hit, index) => {
        cy.get("@tableRows").eq(index).should("contain", hit.title);
      });
    });
  });

  it("extra credit", () => {
    const { hits } = require("../../fixtures/stories.json");
    cy.search("cypress.io");
    cy.wait("@getStories");

    cy.get(".table-row").as("tableRows").should("have.length", hits.length);
    hits.forEach((hit, index) => {
      cy.get("@tableRows").eq(index).should("contain", hit.title);
    });
  });
});
