const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require('../../POM/FaceBook/LoginPage');
const LoginErrorPage = require('../../POM/FaceBook/LoginErrorPage');
const Commands = require('../../POM/Utils/Commands');
const CreateNewAccPage = require('../../POM/FaceBook/CreateNewAccPage');
const Dates = require('../../POM/Utils/Dates');
const { expect } = require("chai");

const loginPage = new LoginPage();
const commands = new Commands();
const signUpPage = new CreateNewAccPage();

When(/^I click on Create new account$/, async () => {
    loginPage.clickCreateNewAcc();
})

Then(/^I verify current date is displayed in birthday drop downs$/, async () => {

    const expectedMonth = Dates.getCurrentDate('month');
    const expectedDay = Dates.getCurrentDate('day');
    const expectedYear = Dates.getCurrentDate('year');
    
    const displayedMonth = await signUpPage.getMonthSelected();
    const displayedDay = await signUpPage.getDaySelected();
    const displayedYear = await signUpPage.getYearSelected();

    expect(displayedMonth, 'Displayed month on drop down does not match expected month').to.equal(expectedMonth);
    expect(displayedYear, 'Displayed year on drop down does not match expected year').to.equal(expectedYear);
    expect (displayedDay, 'Displayed day on drop down does not match expected day').to.equal(expectedDay);

})

Then(/^I verify (female|male|custom) radio button is not selected$/, async (gender) => {

    let isRadioSelected = false;

    switch (gender) {
        case 'female':
            isRadioSelected = await commands.isElementSelected(signUpPage.femaleRadio);
            break;
        case 'male':
            isRadioSelected = await commands.isElementSelected(signUpPage.maleRadio);
            break;
        case 'custom':
            isRadioSelected = await commands.isElementSelected(signUpPage.customRadio);
            break;
    
        default:
            break;
    }

    expect(isRadioSelected, `The ${gender} radio button is selected`).to.be.false;

})

Then(/^I verify (female|male|custom) radio button is selected$/, async (gender) => {

    let isRadioSelected = false;

    switch (gender) {
        case 'female':
            isRadioSelected = await commands.isElementSelected(signUpPage.femaleRadio);
            break;
        case 'male':
            isRadioSelected = await commands.isElementSelected(signUpPage.maleRadio);
            break;
        case 'custom':
            isRadioSelected = await commands.isElementSelected(signUpPage.customRadio);
            break;
    
        default:
            break;
    }

    expect(isRadioSelected, `The ${gender} radio button is not selected`).to.be.true;

})

When(/^I enter '(.*)' in (firstname|lastname|email|mobile number|password)$/, async (data, field) => {

    switch (field.toLowerCase()) {
        case 'firstname':
            await commands.typeInField(signUpPage.firstNameField, data);
            break;

        case 'lastname':
            await commands.typeInField(signUpPage.lastNameField, data);
            break;

        case 'email':
            await commands.typeInField(signUpPage.mobileEmailField, data);
            break;

        case 'mobile number':
            await commands.typeInField(signUpPage.mobileEmailField, data);
            break;

        case 'password':
            await commands.typeInField(signUpPage.passwordField, data);
            break;
    
        default:
            break;
    }

})

When(/^I select '(female|male|custom)' as gender$/, async (genderRadio) => {

    switch (genderRadio.toLowerCase()) {
        case 'female':
            await commands.clickElement(signUpPage.femaleRadio);
            break;
        case 'male':
            await commands.clickElement(signUpPage.maleRadio);
            break;
        case 'custom':
            await commands.clickElement(signUpPage.customRadio);
            break;
        default:
            break;
    }

})

When(/^I click submit button$/, async () => {

    await commands.clickElement(signUpPage.signUpButton);

})

When(/^I verify user is already registered error is displayed$/, async () => {

    await browser.pause(5000);
    await commands.closeTab(await commands.getHandle());

})

When(/^I select '(.+)' as date of birth$/, async (date) => {
    
})

