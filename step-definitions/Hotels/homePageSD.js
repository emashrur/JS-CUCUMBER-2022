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

    await hotels.changeLanguage(languageOption)

})

Then(/^I verify language got changed to (.+)$/, async (language) => {

    const expectedLanguage = language.toLowerCase();

    const currentLanguage = await hotels.getCurrentLanguage();

    expect(currentLanguage.toLowerCase(), `Language does not match the expected language -> ${language}`).to.equal(expectedLanguage);

})

When(/^I select number of adults in Room 1 as 1$/, async() => {

    hotels.setAdultMinimum();

})

Then(/^I verify the minus button for adults is disabled$/, async() => {

    const isMinusEnabled = commands.isElementEnabled('//span[@class="uitk-step-input-button"]/preceding::span[text()="Adults"]');
    expect(isMinusEnabled, 'Minus button is still enabled').to.be.false;

})

Then(/^I verify the plus button for adults is enabled$/, async () =>{

    const isPlusEnabled = commands.isElementEnabled('//span[@class="uitk-step-input-button"]/following::span[text()="Children"]');
    expect(isPlusEnabled, 'Plus button is not enabled').to.be.true;

})

Then(/^I verify the plus button for adults is enabled$/, async () =>{

    

})

