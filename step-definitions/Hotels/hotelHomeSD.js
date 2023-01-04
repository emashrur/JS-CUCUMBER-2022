const { Given, When, Then } = require("@wdio/cucumber-framework");
const Commands = require('../../POM/Utils/Commands');
const { expect } = require("chai");
const HotelsHome = require("../../POM/Hotels/HotelsHome");
const DirectWord = require("../../POM/Hotels/DirectWord");

const commands = new Commands();
const hotels = new HotelsHome();
const dWord = new DirectWord();


Given(/^I am on hotels$/, async () => {
    await browser.url('https://www.hotels.com/');
})

When(/^I change language to (.+)$/, async (languageOption) => {

    await hotels.changeLanguage(languageOption);

    
})

Then(/^I verify language got changed to (.+)$/, async (language) => {

    const expectedLanguage = language.toLowerCase();

    const currentLanguage = await hotels.getCurrentLanguage();

    expect(currentLanguage.toLowerCase(), `Language does not match the expected language -> ${language}`).to.equal(expectedLanguage);

})

When(/^I select number of adults in Room 1 as 1$/, async() => {

    await hotels.setAdultMinimum();
})

// Then(/^I verify the minus button for adults is (disabled|enabled)$/, async (isEnabled) => {

//     const isMinusEnabled = await hotels.isMinusEnabled();
//     switch (isEnabled) {
//         case 'disabled':
//             expect(isMinusEnabled, 'Minus button is still enabled').to.be.false;
//             break;

//         case 'enabled':
//             expect(isMinusEnabled, 'Minus button is not enabled').to.be.true;
//             break;
    
//         default:
//             break;
//     }

// })

Then(/^I verify the (plus|minus) button for adults is (disabled|enabled)$/, async (button, status) => {

    switch (button) {
        case 'plus':
            const isPlusEnabled = await hotels.isPlusEnabled();
            switch (status) {
                case 'disabled':
                    expect(isPlusEnabled, 'Plus button is still enabled').to.equal('true');
                    break;

                case 'enabled':
                    expect(isPlusEnabled, 'Plus button is not enabled').to.equal('false');
                    break;

                default:
                    break;
            }
            break;

        case 'minus':
            const isMinusEnabled = await hotels.isMinusEnabled();
            switch (status) {
                case 'disabled':
                    expect(isMinusEnabled, 'Minus button is still enabled').to.equal('true');
                    break;

                case 'enabled':
                    expect(isMinusEnabled, 'Minus button is not enabled').to.equal('false');
                    break;
            
                default:
                    break;
            }

        default:
            break;
    }

})

When(/^I select number of adults in Room 1 as 14$/, async () => {

    await hotels.setAdultMaximum();

})

When(/^I click on dates$/, async () => {

    await hotels.openDates();

})

When(/^I go to current month if not displayed$/, async () => {

    await hotels.verifyMonth();
    await browser.pause(2000);

})

Then(/^I verify for correct month$/, async () => {
    
    await hotels.verifyMonth();

})

When(/^I scroll to "Get the app" button$/, async () => {

    await hotels.viewGetApp();

})

When(/^I enter "(.+)" in Phone number$/, async (phoneNumber) => {

    await commands.typeInField(hotels.phoneNumber, phoneNumber)

})

When (/^I click on “Get the app“ button$/, async () => {

    await commands.clickElement(hotels.getAppButton);

})

Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async () => {

    const phoneError = await commands.getElementText(hotels.phoneNumberError);
    const expectedError = 'Please enter a valid phone number.';

    expect(phoneError, 'Error message is not diplayed').to.equal(expectedError);

})

When(/^I click on Sign In$/, async () => {

    await commands.clickElement(hotels.signInButton);

})

When(/^I click feedback$/, async () => {

    const hotelsWindow = await commands.getHandle();
    await commands.clickElement(hotels.feedbackLink);
    const allWindows = await commands.getHandles();
    for (let window of allWindows) {
        if (window !== hotelsWindow) {
            await commands.switchWindow(window);
        }
    }

})

When(/^I click on Submit button$/, async () => {

    await commands.clickElement(dWord.submitButton);

})

Then(/^I verify error message is displayed$/, async () => {

    const expectedErrorMessage = 'Please fill in the required information highlighted below.';
    const errorMessageStatus = await commands.getElementText(dWord.errorMessage);

    expect(errorMessageStatus, 'Error message is not displayed').to.equal(expectedErrorMessage);

})

Then(/^I verify star boxes section is in a red dotted box$/, async () => {

    await browser.takeScreenshot();

})
