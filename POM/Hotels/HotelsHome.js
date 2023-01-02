const Commands = require('../Utils/Commands');


class HotelsHome {

    commands = new Commands();

    // locators

    languageSelected = '//button[@data-stid="button-type-picker-trigger"]//div[text()]';
    languageDropDown = '#language-selector';
    saveButton = '//select[@id="language-selector"]/following::button';
    currentLanguage = '//button[@data-stid="button-type-picker-trigger"]//div/div';
    customizeTravelers = '//button[@data-stid="open-room-picker"]';
    minusAdult = '//*[local-name()="svg" and @aria-label="Decrease the number of adults in room 1"]';
    numOfAdults = '//input[@aria-label="Adults "]';
    plusAdults = '//*[local-name()="svg" and @aria-label="Increase the number of adults in room 1"]';


    // functions

    
    async changeLanguage(language) {

        await this.commands.clickElement(this.languageSelected);
        
        switch (language) {
            case 'Español (Estados Unidos)':
                await this.commands.dropDownSelect(this.languageDropDown,'Español (Estados Unidos)');
                break;
    
            case 'English (United States)':
                await this.commands.dropDownSelect(this.languageDropDown, 'English (United States)');
                break;
        
            default:
                break;
        }

        await this.commands.clickElement(this.saveButton);
        
    }

    async getCurrentLanguage () {

        return await this.commands.getElementText(this.currentLanguage);

    }

    async setAdultMinimum () {

        await this.commands.clickElement(this.customizeTravelers);
        let numAdults = await this.commands.getAttrValue(this.numOfAdults, 'value');
        numAdults = Number(numAdults);
        for (let i = 1 ; i <= numAdults - 1 ; i++) {
            this.commands.clickElement(this.minusAdult);
        }
    }

    async isMinusEnabled () {

        return await this.commands.isElementEnabled(this.minusAdult);

    }

    async isPlusEnabled() {

        return await this.commands.isElementEnabled(this.plusAdults);

    }

    async setAdultMaximum () {

        await this.commands.clickElement(this.customizeTravelers);
        let numAdults = await this.commands.getAttrValue(this.numOfAdults, 'value');
        numAdults = Number(numAdults);
        for (let i = 1 ; i <= 14 - numAdults ; i++) {
            this.commands.clickElement(this.plusAdults);
        }
        await browser.pause(2000);

    }

}

module.exports = HotelsHome;
