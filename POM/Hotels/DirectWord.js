const Commands = require('../Utils/Commands');
const Dates = require('../Utils/Dates');


class DirectWord {

    commands = new Commands();

    // locators
    submitButton = '#submit-button';
    errorMessage = '//p[starts-with(text(), "Please")]';
    redDottedBox = '#required_box_page_rating';
    starRate_1 = '//label[@for="page-rating-1"]';
    starRate_2 = '//label[@for="page-rating-2"]';
    starRate_3 = '//label[@for="page-rating-3"]';
    starRate_4 = '//label[@for="page-rating-4"]';
    starRate_5 = '//label[@for="page-rating-5"]';
    commentsFields = '#verbatim';
    returnHotelsDropDown = '#will-you-return';
    bookedBeforeYes = '//label[@for="booked-here-before-yes"]';
    bookedBeforeNo = '//label[@for="booked-here-before-no"]';
    pageAccomplishYes = '//label[@for="were-you-successful-yes"]';
    pageAccomplishNo = '//label[@for="were-you-successful-no"]';
    thankYouMessage = '//h5[starts-with(text(), "THANK YOU")]';

    

    // functions

    async submitInfo () {
        await this.commands.clickElement(this.submitButton);
    }

    async getErrorMsg () {
        return await this.commands.getElementText(this.errorMessage);
    }

    async isRedDottedBox () {
        return await this.commands.isElementedDisplayed(this.redDottedBox);
    }

    async ratePage (stars) {
        switch (stars) {
            case '1 star':
                await this.commands.clickElement(this.starRate_1);
                break;
    
            case '2 stars':
                await this.commands.clickElement(this.starRate_2);
                break;
    
            case '3 stars':
                await this.commands.clickElement(this.starRate_3);
                break;
    
            case '4 stars':
                await this.commands.clickElement(this.starRate_4);
                break;
    
            case '5 stars':
                await this.commands.clickElement(this.starRate_5);
                break;
    
            default:
                break;
        }
    }

    async enterComment (input) {
        await this.commands.typeInField(this.commentsFields, input);
    }

    async returnToHotelsDropDown (selection) {
        await this.commands.dropDownSelect(this.returnHotelsDropDown, selection);
    }

    async bookedBefore (selection) {
        switch (selection.toLowerCase()) {
            case 'yes':
                await this.commands.clickElement(this.bookedBeforeYes);
                break;
    
            case 'no':
                await this.commands.clickElement(this.bookedBeforeNo);
                break;
        
            default:
                break;
        }
    }

    async pageAccomplish (selection) {
        switch (selection.toLowerCase()) {
            case 'yes':
                await this.commands.clickElement(this.pageAccomplishYes);
                break;
    
            case 'no':
                await this.commands.clickElement(this.pageAccomplishNo);
                break;
    
            default:
                break;
        }
    }

    async verifyThankYouMessage () {
        return await this.commands.isElementedDisplayed(this.thankYouMessage);
    }

    










}

module.exports = DirectWord;