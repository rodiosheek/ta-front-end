
class flightsController {
    constructor(flightsService, contentService, $scope) {
        this.flightsService = flightsService;
        this.contentService = contentService;
        this.store = {};
        this.flights = null;
        this.services = null;

        this.$scope = $scope;
        this.passangers_numders = [];
    }

    $onInit() {
        this.flightsService.getPassangersNumders().then(
            data => this.passangers_numders = data,
            error => console.log(error)
        );
    }

    $onChanges(changes) {

    }

    selectProject(project) {
        this.flightsService.getByProject(project.id).then(
            flights => {
                this.to_flights = flights.to_flights;
                this.back_flights = flights.back_flights;
                this.$scope.$apply();
            },
            error => console.warn(error)
        );
    }

    applyFilter(filter) {
        console.log('filter', filter);
    }

}

flightsController.$inject = ['flightsService', 'contentService', '$scope'];

export default flightsController;