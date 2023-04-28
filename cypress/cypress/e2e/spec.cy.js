
describe("Juice-Shop", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".cc-btn").click();
    cy.get('[aria-label="Close Welcome Banner"]').click();
    //click account
    cy.get("#navbarAccount").click();
    //click login
    cy.get("#navbarLoginButton").click();
    //email field
    cy.get('#email').type('demo');
    //password field
    cy.get('#password').type('demo');
    //login poga
    cy.get("#loginButton").click();


  });

  it("passes", () => {
    //type lemon in search bar, click enter
    //validate that we can see box with lemon juice 
    cy.get("#searchQuery").click();
    cy.get("#mat-input-0").type('Lemon Juice {enter}');
    cy.get('.item-name').should('have.text', ' Lemon Juice (500ml) ');

  });

  it("Search 500ml", () => {
    cy.get("#searchQuery").click();
    cy.get("#searchQuery").click();
    cy.get("#mat-input-0").type('500ml {enter}');
    cy.get('.item-name').should('have.text', ' Eggfruit Juice (500ml)  Lemon Juice (500ml)  Strawberry Juice (500ml) ');
  });

  it("Items per page scenario", () => {
    // Select 12 items per page
    cy.get('.mat-select-value').click();
    cy.get('.mat-option-text').contains('12').click();
    // validate that we see 12 boxes
    cy.get(".product").should("have.length", 12);
    // Select 24 items per page
    cy.get('.mat-select-value').click();
    cy.get('.mat-option-text').contains('24').click();
    // Validate that we see 24 boxes
    cy.get(".product").should("have.length", 24);
    // Select 36 items per page
    cy.get('.mat-select-value').click();
    cy.get('.mat-option-text').contains('36').click();
    // Validate that we see 35 boxes
    cy.get(".product").should("have.length", 35);
  });


});

describe("Juice-Shop without login", () => {
  beforeEach(() => {
  cy.visit("/");
  cy.get(".cc-btn").click();
  cy.get('[aria-label="Close Welcome Banner"]').click();
  })
//})

it.only("Register a new user", () => {
  //click account
  cy.get("#navbarAccount").click();
  //click login
  cy.get("#navbarLoginButton").click();
  // Click Not yet a customer?
  cy.get("#newCustomerLink").click();
  // Input email
  cy.get('#emailControl').type('demo1@demo3.lv');
  // Input password
  cy.get('#passwordControl').type('demo1');
  // Input repeat password
  cy.get('#repeatPasswordControl').type('demo1');
  // Input Security Question - Your favorite movie?
  cy.get('[name="securityQuestion"]').click();
  cy.get('.mat-option-text').contains('Your favorite movie?').click();
  // Input Answer to security question
  cy.get('#securityAnswerControl').type('demo1');
  // Click Register
  cy.get("#registerButton").click();
  // Validate that we on login page - we email and password field should be visible
  cy.get('#email').should('be.visible');
  cy.get('#password').should('be.visible');
});
});