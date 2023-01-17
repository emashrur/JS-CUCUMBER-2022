

class Commands {

    async findWebElement (locator) {
        await $(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WebElement is not displayed'
        })
        return await $(locator);
    }

    async findAllWebElement(locator) {
        await browser.waitUntil(async () => {
            const totalElements = await $$(locator);
            return totalElements.length >= 1
        }, {
            timeout: 60000,
            timeoutMsg: 'No more than one element'
        });
        return await $$(locator);
    }

    // async findAllWebElements (locator, numOfElements) {
    //     browser.waitUntil(async () => {
 
    //      const allWebElements = await $$(locator);
    //      allWebElements.length >= numOfElements;
         
    //     })
        
    //     const allWebElements = await $$(locator);
    //     return allWebElements;
 
    //  }

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
        await $(locator).waitForEnabled({
            timeout: 60000,
            timeoutMsg: 'WebElement is not displayed'
        })
        return await $(locator).getText();
    }

    async getAllElementTexts (locator) {

        await $$(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WebElements are not displayed'
        })

        const allElements = await $$(locator);
        let allElementTexts = [];

        for (let element of allElements) {
            allElementTexts.push(await element.getText());
        }

        return allElementTexts

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
        await $(locator).waitForExist({
            timeout: 60000,
            timeoutMsg: 'WebElement does not exist' 
        })
        return await $(locator).isDisplayed();
    }

    async isElementEnabled (locator) {
        await (await $(locator)).waitForExist({
            timeout: 60000,
            timeoutMsg: 'WebElement does not exist'
        })
        return await $(locator).isEnabled();
    }

    async hoverMouse (locator) {
        await $(locator).waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'WebElement is not displayed'
        })
        await $(locator).moveTo()
    }

    async sleep (seconds) {
        await browser.pause(seconds*1000);
    }

    async scrollToView (locator) {
        await $(locator).waitForExist({
            timeout: 60000,
            timeoutMsg: 'WebElement does not exist'
        })
        await $(locator).scrollIntoView()
    }

}

module.exports = Commands;