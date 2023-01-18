const Commands = require("../Utils/Commands");

class SignInPage {

    commands = new Commands();
    
    // locators

    emailField = '#loginFormEmailInput';
    passwordField = '#loginFormPasswordInput';
    signInButton = '//button[text()="Sign in"]';
    errorMessage = '//h3[starts-with(text(),"Email and password don\'t match")]';

    // functions

    async enterEmail (input) {

        await this.commands.typeInField(this.emailField, input);

    }

    async enterPassword (input) {

        await this.commands.typeInField(this.passwordField, input);
    }

    async clickSignInButton() {

        await this.commands.clickElement(this.signInButton);

    }

    async verifyError () {

        await this.commands.sleep(5);
        return await this.commands.isElementedDisplayed(this.errorMessage);

    }



}

module.exports = SignInPage;