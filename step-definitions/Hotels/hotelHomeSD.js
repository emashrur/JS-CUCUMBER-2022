const { Given, When, Then } = require("@wdio/cucumber-framework");
const Commands = require('../../POM/Utils/Commands');
const { expect } = require("chai");
const HotelsHome = require("../../POM/Hotels/HotelsHome");
const DirectWord = require("../../POM/Hotels/DirectWord");
const SearchPage = require("../../POM/Hotels/SearchPage");
const SignInPage = require("../../POM/Hotels/SignInPage");
const SignUpPage = require("../../POM/Hotels/SignUpPage");

const commands = new Commands();
const hotels = new HotelsHome();
const dWord = new DirectWord();
const search = new SearchPage();
const signIn = new SignInPage();
const signUp = new SignUpPage();


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

When(/^I search "(.+)"$/, async (input) => {

    await hotels.typeSearch(input);

})

When(/^I enter check-(in|out) date as (.+)-(.+)-2023$/, async (status, month, date) => {

    if (status === 'in') {
        await hotels.enterDate();
    }
    await hotels.findDate(month, date);
    if (status === 'out') {
        await commands.clickElement(hotels.doneButton);
    }

})

When(/^I click on search button$/, async () => {

    await hotels.enterSearch();

})

When(/^I click on (.+) stars from star-rating filter$/, async (stars) => {

    await search.selectRating(stars);

})

When(/^I select "(.+)" from sort-by dropdown$/, async (sortBy) => {

    await search.sortBySelect(sortBy);

})

When(/^I verify the search results match (.+) star-rating as selected in the above step$/, async (stars) => {

    expect(await search.verifyStars(stars), 'Search results ratings do not match expected star-rating value').to.be.true;

})

When(/^I verify all hotels are listed in increasing price order$/, async () => {

    expect(await search.verifyPriceLeastToGreatest(), 'Prices are not listed in increasing price order').to.be.true;

})

When(/^I click Sign In button$/, async () => {

    const hotelsTab = await commands.getHandle();
    
    await hotels.clickSignInButton();

    const allTabs = await commands.getHandles();
    for (tab of allTabs) {
        if (tab !== hotelsTab) {
            await commands.switchWindow(tab)
            break;
        }
    }

})

When(/^I enter invalid email address "(.+)"$/, async (input) => {

    await signIn.enterEmail(input);

})

When(/^I enter invalid password "(.+)"$/, async (input) => {

    await signIn.enterPassword(input);

})

When(/^I click Sign In button to submit credentials$/, async () => {

    await signIn.clickSignInButton();

})

Then(/^I verify error message is displayed "Email and password don't match"$/, async () => {

    const errorDisplayed = await signIn.verifyError();
    expect(errorDisplayed,'Error message is not displayed').to.be.true;

})

When(/^I click on Sign up link$/, async () => {

    const hotelsTab = await commands.getHandle();

    await hotels.clickSignUpButton()
    
    const allTabs = await commands.getHandles();
    for (tab of allTabs) {
        if (tab !== hotelsTab) {
            await commands.switchWindow(tab)
            break;
        }
    }

})

When(/^I type invalid email address "(.+)"$/, async (input) => {

    await signUp.enterEmail(input);

})

When(/^I type invalid first name "(.+)"$/, async (input) => {

    await signUp.enterFirstName(input);

})

When(/^I type invalid last name "(.+)"$/, async (input) => {

    await signUp.enterLastName(input);

})

Then(/^I verify invalid email error is displayed$/, async () => {

    expect(await signUp.verifyEmailError(), 'Email error is not displayed').to.be.true;

})

Then(/^I verify invalid first name error is displayed$/, async () => {

    expect(await signUp.verifyFirstNameError(), 'First name error is not displayed').to.be.true;

})

Then(/^I verify invalid last name error is displayed$/, async () => {

    expect(await signUp.verifyLastNameError(), 'Last name error is not displayed').to.be.true;

})

Then(/^I verify "Keep me signed in" checkbox is displayed and enabled$/, async () => {

    expect(await signUp.verifyCheckBoxDisplayed(), 'Keep-me-signed-in checkbox is not displayed').to.be.true;
    expect(await signUp.verifyCheckBoxEnabled(), 'Keep-me-signed-in checkbox is not enabled').to.be.true;


})

Then(/^I verify "Continue" button is displayed but disabled$/, async () => {

    expect(await signUp.verifyContinueButtonDisplayed(), 'Continue button is not displayed').to.be.true;
    expect(await signUp.verifyContinueButtonEnabled(), 'Continue button is Enabled').to.be.false;

})

When(/^I enter "(.+)" as email address$/, async (input) => {

    await signUp.enterEmail(input);

})

When(/^I enter "(.+)" as first name$/, async (input) => {

    await signUp.enterFirstName(input);

})

When(/^I enter "(.+)" as last name$/, async (input) => {

    await signUp.enterLastName(input);

})

When(/^I type (.+) as password$/, async (input) => {

    await signUp.enterPassword(input);

})

Then(/^I verify Password strength bar is (.+) filled$/, async (fillAmount) => {

    expect(await signUp.checkStrength(fillAmount), `Strength bar is not ${fillAmount} filled`).to.be.true;

})

Then(/^I verify Password strength message is (.+)$/, async (strength) => {

    expect(await signUp.checkStrengthText(strength), `Strength message is not ${strength.toLowerCase()}`).to.be.true;
    const mainHandle = await commands.getHandle();
    const allHandles = await commands.getHandles();
    for (const handle of allHandles) {
        if (handle !== mainHandle) {
            await commands.switchWindow(handle);
            await commands.closeTab();
        }
        await commands.switchWindow(mainHandle); 
    }

})

When(/^I click "(.+)" link$/, async (link) => {

    switch (link.toLowerCase()) {
        case "terms and conditions":
            await signUp.openTermsAndConditions();
            break;
        case "privacy statement":
            await signUp.openPrivacyStatement();
            break;    
        default:
            break;
    }

})

Then(/^I verify "(.+)" page opens in new tab$/, async (page) => {

    if (page.toLowerCase() === "terms and conditions") {
        const mainHandle = await commands.getHandle();
            const allHandles = await commands.getHandles();
            for (const handle of allHandles) {
                await commands.switchWindow(handle);
                const windowTitle = await browser.getTitle();
                if (windowTitle.includes('Terms') && handle !== mainHandle) {
                    return true;
                    break;
                }
                return false;
            }
    } else if (page.toLowerCase() === "privacy statement") {
        const mainHandle = await commands.getHandle();
            const allHandles = await commands.getHandles();
            for (const handle of allHandles) {
                if (handle !== mainHandle) {
                    return true;
                    break;
                }
                return false;
                break;
            }
    }
})

When(/^I return to Sign Up page$/, async () => {

    const allHandles = await commands.getHandles();
    for (const handle of allHandles) {
        await commands.switchWindow(handle);
        const windowTitle = await browser.getTitle();
        if (windowTitle.includes('Create')) {
            break;
        }
    }

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