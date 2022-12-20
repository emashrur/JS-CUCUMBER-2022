const { Given, When, Then } = require("@wdio/cucumber-framework");
const Commands = require('../../POM/Utils/Commands');
const { expect } = require("chai");
const HotelsHome = require("../../POM/Hotels/HotelsHome");

const commands = new Commands();
const hotels = new HotelsHome();


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

Then(/^I verify the minus button for adults is (disabled|enabled)$/, async (isEnabled) => {

    const isMinusEnabled = await hotels.isMinusEnabled();
    switch (isEnabled) {
        case 'disabled':
            expect(isMinusEnabled, 'Minus button is still enabled').to.be.false;
            break;

        case 'enabled':
            expect(isMinusEnabled, 'Minus button is not enabled').to.be.true;
            break;
    
        default:
            break;
    }

})

Then(/^I verify the plus button for adults is (disabled|enabled)$/, async () => {

    const isPlusEnabled = await hotels.isPlusEnabled()
    switch (isEnabled) {
        case 'disabled':
            expect(isPlusEnabled, 'Plus button is still enabled').to.be.false;
            break;

        case 'enabled':
            expect(isPlusEnabled, 'Plus button is not enabled').to.be.true;
            break;
    
        default:
            break;
    }

})

When(/^I select number of adults in Room 1 as 14$/, async () => {

    await hotels.setAdultMaximum();

})
