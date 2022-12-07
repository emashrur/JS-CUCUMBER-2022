const Commands = require("../Commands");


class LoginPage {

    commands = new Commands();

    // Locators

    loginEmail = '#email';
    loginPassWord = '#pass';
    loginButton = '<button>';
    createNewAccButton = '=Create new account';

    

    loginErrorMessage = '//div[contains(text(), "email or mobile")]';

    messengerLink = '//a[text()="Messenger"]';
    oculusLink = '=Oculus';
    portalLink = '=Portal';
    instagramLink = '=Instagram';
    metaPayLink= '=Meta Pay';




    // functions to interact with the web-Elements on the LoginPage

    async emailField (userEmail) {
        await this.commands.typeInField(this.loginEmail, userEmail);
    }

    async passField (userPassword) {
        await this.commands.typeInField(this.loginPassWord, userPassword);
    }

    async clickLoginButton () {
        await this.commands.clickElement(this.loginButton);
    }

    async clickCreateNewAcc () {
        await this.commands.clickElement(this.createNewAccButton);
    }

    async openMessenger () {
        await this.commands.clickElement(this.messengerLink);
    }

    async openOculus () {
        await this.commands.clickElement(this.oculusLink);
    }

    async openPortal () {
        await this.commands.clickElement(this.portalLink);
    }

    async openInstagram () {
        await this.commands.clickElement(this.instagramLink);
    }

    async openMetaPay () {
        await this.commands.clickElement(this.metaPayLink);
    }

    async isEmailFieldEnabled () {
        await this.commands.isElementEnabled(this.loginEmail);
    }

    async isPassFieldEnabled () {
        await this.commands.isElementEnabled(this.loginPassWord);
    }    

    async isLoginButtonEnabled () {
        await this.commands.isElementEnabled(this.loginButton);
    }

}

module.exports = LoginPage;