const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require('../../POM/FaceBook/LoginPage');
const LoginErrorPage = require('../../POM/FaceBook/LoginErrorPage');
const Commands = require('../../POM/Utils/Commands');
const { expect } = require("chai");

const loginPage = new LoginPage();
const errorPage = new LoginErrorPage();
const commands = new Commands();



Given(/^I am on (facebook|darksky|amazon)$/, async (url) => {

    switch (url.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            break;
        case 'darksky':
            await browser.url('https://darksky.net');
            break;
        case 'amazon':
            await browser.url('https://amazon.com/');
            break;
        default:
            break;
    }

})

When(/^I type '(.+)' as (username|password)$/, async (data, fieldName) => {
    
    switch (fieldName) {
        case 'username':
            await loginPage.emailField(data);
            break;
        case 'password':
            await loginPage.passField(data);
            break;
        default:
            break;
    }

})

When(/^I click on login button$/, async () => {

    await loginPage.clickLoginButton();

})

Then(/^I verify error is displayed$/, async () => {

    expect(await errorPage.isLoginErrorDisplayed(), 'Login error is not displayed').to.be.true;

})

When(/^I click on '(.+)'$/, async (link) => {

    switch (link.toLowerCase()) {
        case 'instagram':
            await loginPage.openInstagram();
            break;

        case 'oculus':
            await loginPage.openOculus();
            break;

        case 'meta pay':
            await loginPage.openMetaPay();
            break;

        case 'portal':
            await loginPage.openPortal();
            break;

        case 'create new account':
            await loginPage.clickCreateNewAcc();
            break;
    
        default:
            break;
    }

})

Then(/^I verify '(.+)' opens in a new window$/, async (link) => {

    const currentHandle = await commands.getHandle();
    const allHandles = await commands.getHandles();

    for (const handle of allHandles) {
        if (handle !== currentHandle) {
            await commands.switchWindow(handle);
            break;
        }
    }
    const newHandle = await commands.getHandle();

    const res = newHandle !== currentHandle;

    expect(res, `${link} was not launched in new window`).to.be.true;

})

Then(/^I verify '(.+)' is enabled$/, async (field) => {

    switch (field.toLowerCase()) {
        case 'email field':
            const emailField = await loginPage.isEmailFieldEnabled();
            expect(emailField, 'Email field is not enabled').to.be.true;
            break;

        case 'password field':
            const passField = await loginPage.isPassFieldEnabled();
            expect(passField, 'Password field is not enabled').to.be.true;
            break;
    
        case 'login button':
            const loginButton = await loginPage.isLoginButtonEnabled();
            expect(loginButton, 'Login button is not enabled').to.be.true;
            break;

        default:
            break;
    }
})

Then(/^I verify email field is enabled$/, async () => {
    const emailField = await loginPage.isEmailFieldEnabled();
    expect(emailField, 'Email field is not enabled').to.be.true;
})

Then(/^I verify password field is enabled$/, async () => {
    const passField = await loginPage.isPassFieldEnabled();
    expect(passField, 'Password field is not enabled').to.be.true;
})

Then(/^I verify login button is enabled$/, async () => {
    const loginButton = await loginPage.isLoginButtonEnabled();
    expect(loginButton, 'Login button is not enabled').to.be.true;
})

