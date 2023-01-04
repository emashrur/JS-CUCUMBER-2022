const Commands = require('../Utils/Commands');
const Dates = require('../Utils/Dates');


class HotelsHome {

    commands = new Commands();

    // locators

    languageSelected = '//button[@data-stid="button-type-picker-trigger"]//div[text()]';
    languageDropDown = '#language-selector';
    saveButton = '//select[@id="language-selector"]/following::button';
    currentLanguage = '//button[@data-stid="button-type-picker-trigger"]//div/div';
    customizeTravelers = '//button[@data-stid="open-room-picker"]';
    minusAdult = '//input[@aria-label="Adults "]/preceding-sibling::button';
    numOfAdults = '//input[@aria-label="Adults "]';
    plusAdults = '//input[@aria-label="Adults "]/following-sibling::button';
    adultMinusDisabled = '//input[@aria-label="Adults "]/preceding-sibling::button[@disabled]';
    adultPlusDisabled = '//input[@aria-label="Adults "]/following-sibling::button[@disabled]';
    datesCalendar = '//button[@data-stid="open-date-picker"]';
    monthsDisplayed = '//h2[@class="uitk-date-picker-month-name uitk-type-medium"]';
    disabledDates = '//td//button[@disabled]';
    getAppButton = '#submitBtn';
    phoneNumber = '#phoneNumber';
    phoneNumberError = '#phoneNumber-error';
    signInButton = '//button[text()="Sign in"]';
    feedbackLink = '//a[text()="Feedback"]';
    


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

        // return await this.commands.isElementEnabled(this.minusAdult);
        return await this.commands.getAttrValue(this.adultMinusDisabled, 'disabled');

    }

    async isPlusEnabled() {

        // return await this.commands.isElementEnabled(this.plusAdults);
        return await this.commands.getAttrValue(this.adultPlusDisabled, 'disabled');

    }

    async setAdultMaximum () {

        let numAdults = await this.commands.getAttrValue(this.numOfAdults, 'value');
        numAdults = Number(numAdults);
        for (let i = 1 ; i <= 14 - numAdults ; i++) {
            this.commands.clickElement(this.plusAdults);
        }
        await browser.pause(2000);

    }

    async openDates () {
        await this.commands.clickElement(this.datesCalendar);
    }

    async verifyMonth () {

        const expectedDate = Dates.getCurrentDate('Month');
        const monthElements = await this.commands.findAllWebElements(this.monthsDisplayed);
        let displayedMonths = [];
        for (let monthElement of monthElements) {
            const thisMonth = await this.commands.getElementText(monthElement);
            displayedMonths.push(thisMonth);
        }

        console.log('\n-----');
        console.log(displayedMonths);
        console.log('-----\n');

    }

    async viewGetApp () {

        await this.commands.scrollToView(this.getAppButton);

    }

}

module.exports = HotelsHome;
