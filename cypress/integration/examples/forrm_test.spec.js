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
    cy.get(":nth-child(2) > a").click();
  });

  after("go shop shop ", () => {
    cy.visit("http://localhost:3000/pizza");
  });
});

describe("testing pizza form", () => {
  it("input name into name input", () => {
    cy.get("#name")
      .type("cassius clay")
      .should("have.value", "cassius clay")
      .clear();
  });

  it("check a topping", () => {
    cy.get(`[for="pepperoni"] > input`).check().uncheck();
  });

  it("check a topping", () => {
    cy.get(`[for="onions"] > input`).check().uncheck();
  });

  it("check a topping", () => {
    cy.get(`[for="peppers"] > input`).check().uncheck();
  });

  it("check a topping", () => {
    cy.get(`[for="mushrooms"] > input`).check().uncheck();
  });

  it("submits the form", () => {
    cy.get("form").submit();
  });
});
