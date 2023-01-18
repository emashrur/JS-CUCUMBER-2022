const Commands = require("../Utils/Commands");

class SignUpPage {

    commands = new Commands();

    // locators

    emailFieldLocator = '#signupFormEmailInput';
    fNameFieldLocator = '#signupFormFirstNameInput';
    lNameFieldLocator = '#signupFormLastNameInput';
    passwordFieldLocator = '#signupFormPasswordInput';
    keepSignedInLocator = '#rememberMeSignUpCheckbox';
    keepMeSignedInDisplayed = '//span[text()="Keep me signed in"]'
    continueButtonLocator = '#signupFormSubmitButton';
    emailErrorLocator = '#signupFormEmailInput-error';
    fNameErrorLocator = '#signupFormFirstNameInput-error';
    lNameErrorLocator = '#signupFormLastNameInput-error';
    passwordStrengthLocator = '//span[contains(text(),"%")]';
    passwordStrengthTextLocator = '//div[@class="uitk-layout-flex-item uitk-type-right uitk-progress-bar-description uitk-type-bold"]';
    termsAndConditionsLink = '=Terms and Conditions';
    privacyStatementLink = '=Privacy Statement';



    // functions

    async enterEmail (input) {

        await this.commands.typeInField(this.emailFieldLocator, input);

    }

    async enterFirstName (input) {

        await this.commands.typeInField(this.fNameFieldLocator, input);
    }

    async enterLastName (input) {

        await this.commands.typeInField(this.lNameFieldLocator, input);

    }

    async enterPassword (input) {

        await this.commands.typeInField(this.passwordFieldLocator, input);

    }

    async verifyCheckBoxEnabled () {

        return await this.commands.isElementEnabled(this.keepSignedInLocator);

    }

    async verifyCheckBoxDisplayed () {

        return await $(this.keepSignedInLocator).isDisplayed();

    }

    async verifyContinueButtonEnabled () {

        return await this.commands.isElementEnabled(this.continueButtonLocator);

    }

    async verifyContinueButtonDisplayed () {

        return await this.commands.isElementedDisplayed(this.continueButtonLocator);

    }

    async verifyEmailError () {

        return await this.commands.isElementedDisplayed(this.emailErrorLocator);

    }

    async verifyFirstNameError () {

        return await this.commands.isElementedDisplayed(this.fNameErrorLocator);

    }

    async verifyLastNameError () {

        return await this.commands.isElementedDisplayed(this.lNameErrorLocator);

    }

    async checkStrength (fillAmount) {

        let expectedPercentage = '';
        let actualPercentageString = '';
        switch (fillAmount.toLowerCase()) {
            case 'not':
                expectedPercentage = '0%';
                actualPercentageString = await this.commands.getElementText(this.passwordStrengthLocator);
                return actualPercentageString.includes(expectedPercentage);
                break;
            case 'half':
                expectedPercentage = '50%';
                actualPercentageString = await this.commands.getElementText(this.passwordStrengthLocator);
                return actualPercentageString.includes(expectedPercentage);
                break;
            case 'almost':
                expectedPercentage = '75%';
                actualPercentageString = await this.commands.getElementText(this.passwordStrengthLocator);
                return actualPercentageString.includes(expectedPercentage);
                break;  
            case 'completely':
                expectedPercentage = '100%';
                actualPercentageString = await this.commands.getElementText(this.passwordStrengthLocator);
                return actualPercentageString.includes(expectedPercentage);
                break;
            default:
                return false;
                break;
        }

    }

    async checkStrengthText (strength) {
        
        const expectedText = strength.toLowerCase();
        const actualText = await this.commands.getElementText(this.passwordStrengthTextLocator);
        return actualText.toLowerCase().includes(expectedText);

    }

    async openTermsAndConditions () {

        await this.commands.clickElement(this.termsAndConditionsLink);

    }

    async openPrivacyStatement () {

        await this.commands.clickElement(this.privacyStatementLink);
        
    }

}

module.exports = SignUpPage;