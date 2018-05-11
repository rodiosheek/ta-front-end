import template from './flights-table.template.html';

require('./flights-table.style.scss');

class flightTableController {
    constructor() {

    }
}

flightTableController.$inject = [];

const flightTableComponent = {
    template: template,
    controller: flightTableController,
    bindings: {
        flights: '='
    }
}

export default flightTableComponent;