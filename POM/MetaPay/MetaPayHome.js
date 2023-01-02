const Commands = require('../Commands');

class MetaPayHome {

    commands = new Commands();
    // WebElements
    usingMetaPay = '//p//a[text()="Using Meta Pay"]';

    // Functions
    async hoverMetaPay () {
        await this.commands.hoverMouse(this.usingMetaPay);
    }

}

module.exports = MetaPayHome;