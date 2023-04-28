import BasePage from "./base.page";

class RadioButtonPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get selectButton() {
        return cy.get('[class="custom-control custom-radio custom-control-inline"]');
    }
    

    static get result() {
        return cy.get('[class="text-success"]');
    }

    static get noButton(){
       return cy.get("#noRadio");
    }

}

export default RadioButtonPage;