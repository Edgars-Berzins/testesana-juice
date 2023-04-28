import TextBoxPage from "../../pageObjects/textBoxPage.page";
import CheckboxPage from "../../pageObjects/checkBoxPage.page";
import RadioButtonPage from "../../pageObjects/radioButtonPage.page";

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

    it("Text Box Negative", () => {
      TextBoxPage.emailField.should("not.have.class", "field-error");
      TextBoxPage.emailField.type("random@email@asdsada.com");
      TextBoxPage.submitButton.click();
      TextBoxPage.emailField.should("have.class", "field-error");
    });

    // Checkbox scenarios
    context("Check Box scenarios", () => {
      beforeEach(() => {
        CheckboxPage.visit();
      });

      it('Checkbox select items', () => {
        // 
        CheckboxPage.expandAllButton.click();
        CheckboxPage.checkboxTitles.contains("Notes").click();
        CheckboxPage.checkboxTitles.contains("Angular").click();
        CheckboxPage.checkboxTitles.contains("Private").click();
        CheckboxPage.checkboxTitles.contains("Excel File.doc").click();
        // Validate that selected items are registered
        CheckboxPage.result.should(
          "have.text",
          "You have selected :notesangularprivateexcelFile"
        );

      })

      it("Checkbox click Desktop", () => {
        // Click Expand (+) icon/button
        CheckboxPage.expandAllButton.click();
        // Click Desktop
        CheckboxPage.checkboxTitles.contains("Desktop").click();
        // Validate success message - You have selected :desktopnotescommands
        CheckboxPage.result.should(
          "have.text",
          "You have selected :desktopnotescommands"
        );
      });


    });
  });
  // Radio button
  context("Radio Button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it.only("Click buttons and validate", () => {
      // Click Yes button
      RadioButtonPage.selectButton.contains("Yes").click();
      // Validate message - You have selected Yes
      RadioButtonPage.result.should(
        "have.text",
        "Yes"
      );
      // Click Impressive button
      RadioButtonPage.selectButton.contains("Impressive").click();
      // Validate message - You have selected Impressive
      RadioButtonPage.result.should(
        "have.text",
        "Impressive"
      );
      // Validate that no button is disabled
      RadioButtonPage.noButton.should("have.class","disabled");


      
    });
  });


});