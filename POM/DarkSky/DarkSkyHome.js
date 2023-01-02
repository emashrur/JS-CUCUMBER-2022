const Commands = require('../Commands');

class DarkSkyHome {

    commands = new Commands();

    // Locators

    feelsLikeTemp = '//span[@class="feels-like-text"]';
    lowTemp = '//span[@class="low-temp-text"]';
    highTemp = '//span[@class="high-temp-text"]';

    // Functions

    async getFeelsLikeTemp () {
        return (this.commands.getElementText(this.feelsLikeTemp));
    }
    async getLowTemp () {
        return (this.commands.getElementText(this.lowTemp));
    }
    async getHighTemp () {
        return (this.commands.getElementText(this.highTemp));
    }

}

module.exports = DarkSkyHome;