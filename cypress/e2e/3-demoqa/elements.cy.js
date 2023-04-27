import TextBoxPage from "../../pageObjects/textBoxPage.page";


describe("Elements", () => {
  context("Text Box scenarios", () => {
    beforeEach(() => {
        TextBoxPage.visit();
    });

    it("Text Box Positive", () => {
      // TODO: Implement scenario
      TextBoxPage.usernameField.type("Donald Trump");
      TextBoxPage.emailField.type("random@random.lv");
      TextBoxPage.currentAddressField.type("random Current Address");
      TextBoxPage.permanentAddressField.type("random Permanent Address");
      TextBoxPage.submitButton.click();
      //validation
    TextBoxPage.nameSection.should("have.text", "Name:Donald Trump");
    TextBoxPage.emailSection.should("have.text", "Email:random@random.lv");
    TextBoxPage.currentSection.should("contain.text", "Current Address :random Current Address");
    TextBoxPage.permanentSection.should(
        "contain.text",
        "Permananet Address :random Permanent Address"
      );




       
    });
    
    it ("Text Box Negative", () => {
        TextBoxPage.emailField.should("not.have.class", "field-error");
        TextBoxPage.emailField.type("random@email@asdsada.com");
        TextBoxPage.submitButton.click();
        TextBoxPage.emailField.should("have.class", "field-error");
      });

  });
});