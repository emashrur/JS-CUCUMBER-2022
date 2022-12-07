const Commands = require('../Commands');

class MessengerLoginErrorPage {

    commands = new Commands();

    // Locators

    findAccLink = '*=Find';
    continueButton = '//button[text()="Continue"]';
    keepMeSignedInCheckbox = '//input[@type="checkbox"]';
    clickCheckbox = '//label[@class="uiInputLabelInput"]';

    // Functions

    async continue () {
        await this.commands.clickElement(this.continueButton);
    }
    async isChecked () {
        return await this.commands.isElementSelected(this.keepMeSignedInCheckbox);
    }
    async findAccLinkDisplayed () {
        return await this.commands.isElementedDisplayed(this.findAccLink);
    }
    async checkBox () {
        await this.commands.clickElement(this.clickCheckbox);
    }

}

module.exports = MessengerLoginErrorPage;