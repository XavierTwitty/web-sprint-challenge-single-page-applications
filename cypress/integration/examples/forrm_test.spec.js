describe("My first test ", () => {
  it("does not do much", () => {
    expect(true).to.equal(true);
  });
});

describe("testing my home page", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("visits shop page ", () => {
    cy.get("nth-child(2) > a").click();
  });
});
