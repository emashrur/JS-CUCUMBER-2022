const Commands = require('../Commands');



class CreateNewAccPage {

    commands = new Commands();

    // Locators
    

    birthMonthDrop = '//select[@id="month"]//option[@selected]';
    birthDateDrop = '//select[@id="day"]//option[@selected]';
    birthYearDrop = '//select[@id="year"]//option[@selected]';

    monthDropDown = '#month';
    dayDropDown = '#day';
    yearDropDown = '#year';

    // Functions

    async getMonthSelected () {
        return this.commands.getElementText(this.birthMonthDrop);
    }

    async getDaySelected () {
        return this.commands.getElementText(this.birthDateDrop);
    }

    async getYearSelected () {
        return this.commands.getElementText(this.birthYearDrop);
    }













}

module.exports = CreateNewAccPage;