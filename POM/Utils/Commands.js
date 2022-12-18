

class Commands {

    async findWebElement (locator) {
        await $(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WebElement is not displayed'
        })
        return await $(locator);
    }

    async findAllWebElements (locator, numOfElements) {
       browser.waitUntil(async () => {

        const allWebElements = await $$(locator);
        return allWebElements.length >= numOfElements;
        
       })
    }

    async typeInField(locator, value) {
        await $(locator).waitForEnabled({
            timeout: 60000,
            timeoutMsg: 'WebElement is not enabled'
        })
        await $(locator).setValue(value);
    }

    async clickElement (locator) {
        await $(locator).waitForClickable({
            timeout: 60000,
            timeoutMsg: 'WebElement is not clickable'
        })
        await $(locator).click();
    }

    async getElementText (locator) {
        await $(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WelElement is not displayed'
        })
        return await $(locator).getText();
    }

    async getAttrValue (locator, attrName) {
        await $(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WebElement is not displayed'
        })
        return await $(locator).getAttribute(attrName)
    }

    async dropDownSelect (locator, data) {
        await $(locator).waitForEnabled({
            timeout: 60000,
            timeoutMsg: 'WebElement is not enabled'
        })
        const dropDown = await $(locator);
        dropDown.selectByVisibleText(data);
    }

    async getHandle () {
        return await browser.getWindowHandle();
    }

    async getHandles() {
        return await browser.getWindowHandles();
    }

    async switchWindow (newWindowHandle) {
        await browser.switchToWindow(newWindowHandle);
    }

    async closeTab () {
        await browser.closeWindow();
    }

    async isElementSelected (locator) {
        await $(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WebElement is not displayed'
        })
        return await $(locator).isSelected();
    }

    async isElementedDisplayed (locator) {
        await $(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WebElement is not displayed' 
        })
        return await $(locator).isDisplayed();
    }

    async isElementEnabled (locator) {
        await $(locator).waitForEnabled({
            timeout: 60000,
            timeoutMsg: 'WebElement is not enabled'
        })
        return await $(locator).isEnabled();
    }

    async hoverMouse (locator) {
        await $(locator).waitForClickable({
            timeout: 60000,
            timeoutMsg: 'WebElement is not clickable'
        })
        await $(locator).moveTo()
    }


}

module.exports = Commands;