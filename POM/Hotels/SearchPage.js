const Commands = require("../Utils/Commands");
const Dates = require("../Utils/Dates");


class SearchPage {

    commands = new Commands();
     
    // locators

    oneStarFilter = '//label[@aria-label="1 star"]';
    twoStarFilter = '//label[@aria-label="2 star"]';
    threeStarFilter = '//label[@aria-label="3 star"]';
    fourStarFilter = '//label[@aria-label="4 star"]';
    fiveStarFilter = '//label[@aria-label="5 star"]';
    sortDropDown = '#sort-filter-dropdown-sort';
    pricesLocator = '//div[starts-with(text(),"The price is")]';
    starResultsLocator = '//span[contains(text(),"out of 5")]';


    // functions

    async selectRating (stars) {
        switch (stars) {
            case '1':
                await this.commands.clickElement(this.oneStarFilter);
                break;

            case '2':
                await this.commands.clickElement(this.twoStarFilter);
                break;

            case '3':
                await this.commands.clickElement(this.threeStarFilter);
                break;

            case '4':
                await this.commands.clickElement(this.fourStarFilter);
                break;

            case '5':
                await this.commands.clickElement(this.fiveStarFilter);
                break;
        
            default:
                break;
        }
    }

    async sortBySelect (sortBy) {
        switch (sortBy) {
            case 'Recommended':
                await this.commands.dropDownSelect(this.sortDropDown, 'Recommended');
                break;

            case 'Price':
                await this.commands.dropDownSelect(this.sortDropDown, 'Price');
                break;

            case 'Distance from Manhattan':
                await this.commands.dropDownSelect(this.sortDropDown, 'Distance from Manhattan');
                break;

            case 'Guest rating + our picks':
                await this.commands.dropDownSelect(this.sortDropDown, 'Guest rating + our picks');
                break;

            case 'Price + our picks':
                await this.commands.dropDownSelect(this.sortDropDown, 'Price + our picks');
                break;

            case 'Star rating':
                await this.commands.dropDownSelect(this.sortDropDown, 'Star rating');
                break;
        
            default:
                break;
        }
    } 

    async verifyPriceLeastToGreatest () {

        const allPriceElements = await this.commands.findAllWebElement(this.pricesLocator);
        let allPrices = [];

        for (const priceElement of allPriceElements) {
            const priceString = await priceElement.getText();
            const priceArray = priceString.split(' ');
            const priceNumStr = (priceArray[priceArray.length - 1]);
            const priceNum = Number(priceNumStr.substring(1));
            allPrices.push(priceNum);
        }

        let returnBoolean = true;

        let num = allPrices[0];

        for (const price of allPrices) {
            if (price < num) {
                returnBoolean = false
                break;
            }
            num = price;
        }

        return returnBoolean;

    }

    async verifyStars (stars) {

        let starRatings = [];
        const allRatings = await this.commands.findAllWebElement(this.starResultsLocator);
        for (const rating of allRatings) {
            const ratingString = await rating.getText();
            const thisRating = ratingString.charAt(0);
            starRatings.push(thisRating);
        }

        let returnBoolean = true

        for (const starRating of starRatings) {
            if (starRating !== stars) {
                returnBoolean = false
                break;
            }
        }

        return returnBoolean;

    }






}

module.exports = SearchPage;