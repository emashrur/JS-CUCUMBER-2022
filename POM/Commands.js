

class Commands {

    async findWebElement (locator) {
        return await $(locator);
    }

    async typeInField(locator, value) {
        await $(locator).setValue(value);
    }

    async clickElement (locator) {
        await $(locator).click();
    }

    async getElementText (locator) {
        return await $(locator).getText();
    }

    async getAttrValue (locator, attrName) {
        return await $(locator).getAttribute(attrName)
    }

    async dropDownSelect (locator, data) {
        const dropDown = await $(locator);
        dropDown.selectByVisibleText(data);
    }

    async mouseOn(locator) {
        await $(locator).moveTo();
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
        return await $(locator).isSelected();
    }

    async isElementedDisplayed (locator) {
        return await $(locator).isDisplayed();
    }

    async isElementEnabled (locator) {
        return await $(locator).isEnabled();
    }

    async hoverMouse (locator) {
        await $(locator).moveTo()
    }


}

module.exports = Commands;