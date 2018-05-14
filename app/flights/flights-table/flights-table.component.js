import template from './flights-table.template.html';

require('./flights-table.style.scss');

class flightTableController {
    constructor() {
        
    }

    checkFlight(flight) {
        this.onUpdate({flight: flight});
    }
}

flightTableController.$inject = [];

const flightTableComponent = {
    template: template,
    controller: flightTableController,
    bindings: {
        flights: '<',
        onUpdate: '&'
    }
}

export default flightTableComponent;