import template from './flights-table.template.html';

require('./flights-table.style.scss');

class flightTableController {
    constructor(storeService) {
        this.selected = [];

        this.checkbox = {};

        this.storeService = storeService;
    }

    $onChanges(obj) {
        if(obj.flights.currentValue) {
            let store = this.storeService.getStore();
            if(store.flights && store.flights.length > 0) {
                this.selected = obj.flights.currentValue.filter(fl => store.flights.includes(fl.id));
                store.flights.forEach(el => this.checkbox[el] = true);
            }
        }
    }

    checkFlight(flight) {
    
        let ids = this.selected.map(fl => fl.id).indexOf(flight.id);

        if(ids !== -1) {
            this.selected.splice(ids, 1);
            this.onUpdate({flight: flight, add: false});
        } else {
            this.selected.push(flight);
            this.onUpdate({flight: flight, add: true});
        }
        
    }
}

flightTableController.$inject = ['storeService'];

const flightTableComponent = {
    template: template,
    controller: flightTableController,
    bindings: {
        flights: '<',
        onUpdate: '&'
    }
}

export default flightTableComponent;