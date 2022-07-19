/// <reference types="cypress" />

describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visit homepage and load data from api", () => {
    cy.intercept("GET", "**/6231abada703bb67492d2b8f").as("businessList");

    cy.wait("@businessList");
    cy.get("@businessList").then((body) => {
      expect(body.response.body.length).to.be.above(0);
    });
  });

  it.only("click on second item, redirect, check route and get info about the item", () => {
    cy.get("tbody").find("tr").eq(1).click();
    cy.url().should("contain", "/item/9843406486");

    cy.get(".address-card")
      .find("span")

      .then((address) => {
        const text = address.text();
        expect(text).to.have.string("38785");
        expect(text).to.have.string("5thLondon");
      });

    cy.get(".contact-card")
      .find("span")

      .then((contact) => {
        const text = contact.text();
        expect(text).to.have.string("931-757-7308");
        expect(text).to.have.string("bblackledge1@alexa.com");
      });

    cy.get(".nearby-places__info")
      .find(".nearbyPlace__name")
      .then((lis) => {
        cy.wrap(lis)
          .should("contain", "Camido")
          .and("contain", "Roomm")
          .and("contain", "Avaveo")
          .and("contain", "Skyvu");
      });
  });
});
