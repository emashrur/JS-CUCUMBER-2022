const Commands = require('../Utils/Commands');



class CreateNewAccPage {

    commands = new Commands();

    // Locators
    
    firstNameField = '//input[@name="firstname"]';
    lastNameField = '//input[@name="lastname"]';
    mobileEmailField = '//input[@name="reg_email__"]';
    passwordField = '//input[@name="reg_passwd__"]';
    monthDropDown = '#month';
    dayDropDown = '#day';
    yearDropDown = '#year';
    femaleRadio = '//label[text()="Female"]';
    maleRadio = '//label[text()="Male"]';
    customRadio = '//label[text()="Custom"]';
    signUpButton = '//button[@name="websubmit"]';

    birthMonthDrop = '//select[@id="month"]//option[@selected]';
    birthDateDrop = '//select[@id="day"]//option[@selected]';
    birthYearDrop = '//select[@id="year"]//option[@selected]';

    // Functions

    async setFirstName (firstName) {
        await this.commands.typeInField(this.firstNameField, firstName);
    }

    async setLastName (lastName) {
        await this.commands.typeInField(this.lastNameField, lastName);
    }

    async setMobileOrEmail (contactInfo) {
        await this.commands.typeInField(this.mobileEmailField, contactInfo);
    }

    async setPasswordField (password) {
        await this.commands.typeInField(this.passwordField, password);
    }

    async setMonth (month) {
        await this.commands.dropDownSelect(this.monthDropDown, month);
    }

    async setDay (day) {
        await this.commands.dropDownSelect(this.dayDropDown, day);
    }

    async setYear (year) {
        await this.commands.dropDownSelect(this.yearDropDown, year);
    }

    async setGender (gender) {
        switch (gender.toLowerCase()) {
            case 'female':
                this.commands.clickElement(this.femaleRadio);
                break;
            
            case 'male':
                this.commands.clickElement(this.maleRadio);
                break;

            case 'custom':
                this.commands.clickElement(this.customRadio);
                break;
        
            default:
                break;
        }
    }

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