const { Given, When } = require("@wdio/cucumber-framework");
const LoginPage = require('../../POM/FaceBook/LoginPage');
const LoginErrorPage = require('../../POM/FaceBook/LoginErrorPage');
const Commands = require('../../POM/Commands');
const { expect } = require("chai");

const loginPage = new LoginPage();
const errorPage = new LoginErrorPage();
const commands = new Commands();

/**
 * Glue Code
 *  -> a regular expression which helps to map scenario-steps with functions or step-definitions
 */

Given(/^I am on facebook$/, async () => {

    await browser.url('/');

    await browser.pause(2000);

})

When(/^I type '(.+)' as (username|password)$/, async (data, fieldName) => {
    
    switch (fieldName) {
        case 'email':
            await loginPage.emailField(data);
            break;
        case 'password':
            await loginPage.passField(data);
            break;
        default:
            break;
    }

})

When(/^I click login button$/, async () => {

    await loginPage.clickLoginButton();

})

When(/^$/, async () => {

    expect(await errorPage.isLoginErrorDisplayed(), 'Login error is not displayed').to.be.true;

})