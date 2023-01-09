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



When(/^I click on Travelers$/, async () => {

    await hotels.customizeTravelers();

})

When(/^I set "Adults" to (.+)$/, async (num) => {

    await hotels.setAdultsTo(num);

})

When(/^I set "Children" to (.+)$/, async (num) => {

    await hotels.setChildrenTo(num);

})

When(/^I set Child (.+) age to (.+)$/, async (childNum, childAge) => {

    await hotels.setChildAgeTo(childNum, childAge);

})

When(/^I click Done$/, async () => {

    await hotels.submitTravelerInfo();

})

Then(/^I verify total number of guests in sum of adults and children as same as selected on step #3 and #4$/, async () => {

    expect(await hotels.verifyTravelerSum(), 'Incorrect total number of guests').to.be.true;

})

When(/^I click on dates$/, async () => {

    await hotels.openDates();

})

When(/^I go to current month if not displayed$/, async () => {

    const isCurrentMonthDisplayed = await hotels.verifyMonth();
    if (!isCurrentMonthDisplayed) {
        await hotels.viewEarlierMonths()
    }

})

Then(/^I verify for current month$/, async () => {
    
    expect(await hotels.verifyMonth(), 'Current month is not displayed').to.be.true;

})

Then(/^I verify past dates are disabled$/, async () => {

    const dateStatus = await hotels.checkPastDates();
    expect(dateStatus, 'Past dates are not all disabled').to.be.true;

})

Then(/^I verify back button on current month is disabled$/, async () => {
    
    const prevMonthButtonStatus = await hotels.prevMonthsDisabled();
    expect(prevMonthButtonStatus, 'Previous month button is enabled').to.be.false;

})

When(/^I scroll to "Get the app" button$/, async () => {

    await hotels.viewGetApp();

})

When(/^I enter "(.+)" in Phone number$/, async (phoneNumber) => {

    await hotels.inputPhoneNumber(phoneNumber);

})

When (/^I click on “Get the app“ button$/, async () => {

    await hotels.getApp();

})

Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async () => {

    const phoneError = await hotels.verifyPhoneNumber();
    const expectedError = 'Please enter a valid phone number.';

    expect(phoneError, 'Error message is not diplayed').to.equal(expectedError);

})

When(/^I click on Sign In$/, async () => {

    await hotels.signIn();

})

When(/^I click feedback$/, async () => {

    const hotelsWindow = await commands.getHandle();
    await hotels.feedBack();
    const allWindows = await commands.getHandles();
    for (let window of allWindows) {
        if (window !== hotelsWindow) {
            await commands.switchWindow(window);
        }
    }

})

When(/^I click on Submit button$/, async () => {

    await dWord.submitInfo();

})

Then(/^I verify error message is displayed$/, async () => {

    const expectedErrorMessage = 'Please fill in the required information highlighted below.';
    const errorMessageStatus = await dWord.getErrorMsg();

    expect(errorMessageStatus, 'Error message is not displayed').to.equal(expectedErrorMessage);

})

Then(/^I verify star boxes section is in a red dotted box$/, async () => {

    expect(await dWord.isRedDottedBox(), 'Red dotted box is not displayed').to.be.true;

})

When(/^I rate the page (.+)$/, async (starRating) => {

    await dWord.ratePage(starRating);

})

When(/^I enter "(.+)" in comments$/, async (text) => {

    await dWord.enterComment(text);

})

When(/^I select the option "(.+)" for how likely are you to return to Hotels$/, async (selection) => {

    await dWord.returnToHotelsDropDown(selection);

})

When(/^I select "(.+)" for have you ever booked on Hotels$/, async (selection) => {

    await dWord.bookedBefore(selection);

})

When(/^I select "(.+)" for did you accomplish what you wanted to on this page$/, async (selection) => {

    await dWord.pageAccomplish(selection);

})

Then(/^I verify "THANK YOU FOR YOUR FEEDBACK" message is displayed$/, async () => {

    await commands.sleep(3);

    const thankYouMssg = await dWord.verifyThankYouMessage();
    expect(thankYouMssg, '"THANK YOU FOR YOUR FEEDBACK" message is not displayed').to.be.true;

})





















    // Then(/^I verify the (plus|minus) button for adults is (disabled|enabled)$/, async (button, status) => {

    //     switch (button) {
    //         case 'plus':
    //             const isPlusEnabled = await hotels.isPlusEnabled();
    //             switch (status) {
    //                 case 'disabled':
    //                     expect(isPlusEnabled, 'Plus button is still enabled').to.equal('true');
    //                     break;
    
    //                 case 'enabled':
    //                     expect(isPlusEnabled, 'Plus button is not enabled').to.equal('false');
    //                     break;
    
    //                 default:
    //                     break;
    //             }
    //             break;
    
    //         case 'minus':
    //             const isMinusEnabled = await hotels.isMinusEnabled();
    //             switch (status) {
    //                 case 'disabled':
    //                     expect(isMinusEnabled, 'Minus button is still enabled').to.equal('true');
    //                     break;
    
    //                 case 'enabled':
    //                     expect(isMinusEnabled, 'Minus button is not enabled').to.equal('false');
    //                     break;
                
    //                 default:
    //                     break;
    //             }
    
    //         default:
    //             break;
    //     }
    
    // })