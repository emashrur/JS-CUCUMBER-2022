const Commands = require('../Commands');

class MessengerLoginPage {

    commands = new Commands();

    // Locators
    logInButton = '#loginbutton';
    keepMeSignedInCheckbox = '//label[@class="uiInputLabelInput"]//span[@class]';

    // Functions
    async clickLogIn () {
        await this.commands.clickElement(this.logInButton);
    }
    async isChecked () {
        return await this.commands.isElementSelected(this.keepMeSignedInCheckbox);
    }


}

module.exports = MessengerLoginPage;