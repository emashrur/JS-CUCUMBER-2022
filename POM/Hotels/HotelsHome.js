const Commands = require('../Utils/Commands');


class HotelsHome {

    commands = new Commands();

    // locators

    languageSelected = '//button[@data-stid="button-type-picker-trigger';
    languageDropDown = '#language-selector';
    saveButton = '//button[text()="Save"]';
    currentLanguage = '//button[@data-stid="button-type-picker-trigger"]//div/div';
    customizeTravelers = '//button[@data-stid="open-room-picker"]';

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

        await commands.clickElement('//button[text()="Save"]');
        
    }

    async getCurrentLanguage () {

        return await commands.getElementText($('//button[@data-stid="button-type-picker-trigger"]//div/div'));

    }

    async setAdultMinimum () {

        await this.commands.clickElement('//button[@data-stid="open-room-picker"]');
        for (let i = 0 ; i <= 14 ; i++) {
            await this.commands.clickElement('//span[@class="uitk-step-input-button"]/preceding::span[text()="Adults"]');
            const isMinusEnabled = this.commands.isElementEnabled('//span[@class="uitk-step-input-button"]/preceding::span[text()="Adults"]');
            if (!isMinusEnabled) {
                break;
            }
        }

    }

    async setAdultMaximum () {

        await this.commands.clickElement('//button[@data-stid="open-room-picker"]');
        for (let i = 0 ; i <= 14 ; i++) {
            await this.commands.clickElement('//span[@class="uitk-step-input-button"]/following::span[text()="Children"]');
            const isPlusEnabled = this.commands.isElementEnabled('//span[@class="uitk-step-input-button"]/following::span[text()="Children"]');
            if (!isPlusEnabled) {
                break;
            }
        }

    }

}

module.exports = HotelsHome;
