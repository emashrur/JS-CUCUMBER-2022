const Commands = require('../Commands');

class LoginErrorPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage

    errorMessage = '//div[contains(text(), "email or mobile")]';




    // functions to interact with the web-Elements on the LoginPage


    async getError() {
        return this.commands.getElementText(this.errorMessage);
    }

    async isLoginErrorDisplayed () {
        await this.commands.isElementedDisplayed(this.errorMessage);
    }







}

module.exports = LoginErrorPage;