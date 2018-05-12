import template from './flights-table.template.html';

require('./flights-table.style.scss');

class flightTableController {
    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {
        
    }

    checkFlight(flight) {
        console.log(flight);
    }
}

flightTableController.$inject = ['$scope'];

const flightTableComponent = {
    template: template,
    controller: flightTableController,
    bindings: {
        flights: '<'
    }
}

export default flightTableComponent;