class TextBoxPage{

static get url(){
    return"/text-box"
}

static visit(){
    cy.visit(this.url);
}

static get usernameField(){
    return cy.get("#userName");
}

static get emailField(){
    return cy.get("#userEmail");
}

static get currentAddressField(){
    return cy.get("textarea#currentAddress");
}

static get permanentAddressField(){
    return cy.get("textarea#permanentAddress");
}

static get submitButton(){
    return cy.get("button#submit");
}

//validation
static get nameSection(){
    return cy.get("#name");
}
static get emailSection(){
    return cy.get("#email");
}
static get currentSection(){
    return cy.get("p#currentAddress");
}
static get permanentSection(){
    return cy.get("p#permanentAddress");
}

}

export default TextBoxPage;