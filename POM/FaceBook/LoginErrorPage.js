const Commands = require('../Utils/Commands');

class LoginErrorPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage

    errorMessage = '//div[starts-with(text(), "The email")]';



    // functions to interact with the web-Elements on the LoginPage


    async getError() {
        return this.commands.getElementText(this.errorMessage);
    }

    async isLoginErrorDisplayed () {
        return await this.commands.isElementedDisplayed(this.errorMessage);
    }

    async isPasswordErrorDisplayed () {
        return await this.commands.isElementedDisplayed(this.passwordError);
    }







}

module.exports = LoginErrorPage;