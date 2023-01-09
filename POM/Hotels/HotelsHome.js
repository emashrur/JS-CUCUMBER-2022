const Commands = require('../Utils/Commands');
const Dates = require('../Utils/Dates');


class HotelsHome {

    commands = new Commands();

    // locators

    languageSelected = '//button[@data-stid="button-type-picker-trigger"]//div[text()]';
    languageDropDown = '#language-selector';
    saveButton = '//select[@id="language-selector"]/following::button';
    currentLanguage = '//button[@data-stid="button-type-picker-trigger"]//div/div';
    travelersButton = '//button[@data-stid="open-room-picker"]';
    minusAdult = '//input[@aria-label="Adults "]/preceding-sibling::button';
    numOfAdults = '//input[@aria-label="Adults "]';
    plusAdult = '//input[@aria-label="Adults "]/following-sibling::button';
    adultMinusDisabled = '//input[@aria-label="Adults "]/preceding-sibling::button[@disabled]';
    adultPlusDisabled = '//input[@aria-label="Adults "]/following-sibling::button[@disabled]';
    datesCalendar = '//button[@data-stid="open-date-picker"]';
    currentMonthFinder_1 = '//h2[starts-with(text(),';
    currentMonthFinder_2 = ')]';
    disabledDates = '//td//button[@disabled]';
    getAppButton = '#submitBtn';
    phoneNumber = '#phoneNumber';
    phoneNumberError = '#phoneNumber-error';
    signInButton = '//button[text()="Sign in"]';
    feedbackLink = '//a[text()="Feedback"]';
    prevMonths = '//button[@data-stid="date-picker-paging"]/preceding-sibling::button';
    nextMonths = '//button[@data-stid="date-picker-paging"]/following-sibling::button';
    numOfChildren = '//input[starts-with(@aria-label, "Children")]';
    minusChildren = '//input[starts-with(@aria-label, "Children")]/preceding-sibling::button';
    plusChildren = '//input[starts-with(@aria-label, "Children")]/following-sibling::button';
    childAgeTo = '#age-traveler_selector_children_age_selector-0-';
    doneButton = '//button[text()="Done"]';

    

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
        await this.commands.sleep(2);
    }

    async verifyMonth () {

        const expectedMonth = Dates.getCurrentDate('Month');
        const locatorString = this.currentMonthFinder_1+`"${expectedMonth}"`+this.currentMonthFinder_2;
        const isMonthPresent = await this.commands.isElementedDisplayed(locatorString);

        return isMonthPresent;

    }

    async viewGetApp () {

        await this.commands.scrollToView(this.getAppButton);

    }

    async inputPhoneNumber (phoneNumber) {

        await this.commands.typeInField(this.phoneNumber, phoneNumber);

    }

    async getApp () {

        await this.commands.clickElement(this.getAppButton);

    }

    async verifyPhoneNumber () {

        return await this.commands.getElementText(this.phoneNumberError);

    } 

    async signIn () {

        await this.commands.clickElement(this.signInButton);

    }

    async feedBack () {

        await this.commands.clickElement(this.feedbackLink);

    }

    async viewEarlierMonths () {

        await this.commands.clickElement(this.prevMonths);

    }

    async viewFutureMonths () {

        await this.commands.clickElement(this.nextMonths);

    }

    async checkPastDates () {

        const todaysDate = Dates.getCurrentDate('day');
        const dateNumber = Number(todaysDate);
        let booleanHolder = true

        for (let i = dateNumber - 1 ; i > 0 ; i--) {
            const thisDate = i.toString();
            const isDateEnabled = await this.commands.isElementEnabled(`//button[starts-with(@aria-label, "Jan ${thisDate}")]`);
            if (isDateEnabled === true) {
                booleanHolder = false
            }
        }

        return booleanHolder;

    }

    async prevMonthsDisabled () {

        return await this.commands.isElementEnabled(this.prevMonths);

    }

    async customizeTravelers () {

        await this.commands.clickElement(this.travelersButton);

    }

    async setAdultsTo (num) {

        const currentAdults = Number(await this.commands.getAttrValue(this.numOfAdults, "value"));
            if (num > currentAdults) {
                for (let i = 1 ; i <= num - currentAdults ; i++) {
                   await this.commands.clickElement(this.plusAdult);
                }
            } else if (num < currentAdults) {
                for (let i = 1 ; i <= currentAdults - num ; i++) {
                    await this.commands.clickElement(this.minusAdult);
                }
            }

    }

    async setChildrenTo (num) {

        const currentChildren = Number(await this.commands.getAttrValue(this.numOfChildren, "value"));
            if (num > currentChildren) {
                for (let i = 1 ; i <= num - currentChildren ; i++) {
                    await this.commands.clickElement(this.plusChildren);
                }
            } else if (num < currentChildren) {
                for (let i = 1 ; i <= currentChildren - num ; i++) {
                    await this.commands.clickElement(this.minusChildren);
                }
            }

    }

    async setChildAgeTo (childNum, childAge) {

        const startValue = Number(childNum) - 1;
        const locatorEnding = startValue.toString(); 
        await this.commands.dropDownSelect(this.childAgeTo.padEnd(this.childAgeTo.length + 1, locatorEnding), childAge);

    }

    async submitTravelerInfo () {

        await this.commands.clickElement(this.doneButton);

    }

    async verifyTravelerSum () {

        const displayedTravelers = await this.commands.getElementText(this.travelersButton);
        await this.commands.clickElement(this.travelersButton);
        const totalAdults = Number(await this.commands.getAttrValue(this.numOfAdults, "value"));
        const totalChildren = Number(await this.commands.getAttrValue(this.numOfChildren, "value"));
        const totalTravelers = totalAdults + totalChildren;
        const verifyTravelers = displayedTravelers.includes(totalTravelers.toString()+' travelers');

        return verifyTravelers;

    }

    async setTravelerTo (traveler, num) {

        if (traveler.toLowerCase === "adults") {
            const currentAdults = Number(await this.commands.getAttrValue(this.numOfAdults, "value"));
            if (num > currentAdults) {
                for (let i = 1 ; i <= num - currentAdults ; i++) {
                   await this.commands.clickElement(this.plusAdult);
                }
            } else if (num < currentAdults) {
                for (let i = 1 ; i <= currentAdults - num ; i++) {
                    await this.commands.clickElement(this.minusAdult);
                }
            }
        } else if (traveler.toLowerCase() === "children") {

            const currentChildren = Number(await this.commands.getAttrValue(this.numOfChildren, "value"));
            if (num > currentChildren) {
                for (let i = 1 ; i <= num - currentChildren ; i++) {
                    await this.commands.clickElement(this.plusChildren);
                }
            } else if (num < currentChildren) {
                for (let i = 1 ; i <= currentChildren - num ; i++) {
                    await this.commands.clickElement(this.minusChildren);
                }
            }
        }

        await this.commands.sleep(5);
        
    }

}


module.exports = HotelsHome;
