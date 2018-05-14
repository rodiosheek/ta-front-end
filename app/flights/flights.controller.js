
class flightsController {
    constructor(flightsService, storeService, $scope, $state) {
        this.flightsService = flightsService;
        this.storeService = storeService;
        this.flights = null;
        this.services = null;

        this.$scope = $scope;
        
        this.store = null;
        
        this.$state = $state;

        this.passengers = 1;  
    }

    $onInit() {
        this.flightsService.getPassangersNumders().then(
            data => this.passangers_numders = data,
            error => console.log(error)
        );
        this.store = this.storeService.getStore();

        this.passengers = this.storeService.get('passengers') || this.passengers;
    }

    $onChanges(changes) {

    }

    selectProject(project) {
        if(project) {
            this.storeService.setStore('project_id', project.id);
        }

        this.flightsService.getByProject(project.id).then(
            flights => {
                this.to_flights = flights.to_flights;
                this.back_flights = flights.back_flights;
                this.$scope.$apply();
            },
            error => console.warn(error)
        );
        this.flightsService.getServicesByProject(project.id).then(
            services => {
                this.services = services;
                this.$scope.$apply();
            },
            error => console.log(error)
        )
    }

    setToFlight(flight) {
        console.log('-->', flight);
    }

    applyFilter(filter) {
        console.log('filter', filter);
    }

    addCouponTax() {
        console.log('addCouponTax', this);
    }

    getTotalPrice() {
        return 400;
    }

    selectPassangers(passangers_numders) {
        this.storeService.setStore('passengers', passangers_numders);
    }

    nextStep () {
        this.$state.go('customers');
    }
}

flightsController.$inject = ['flightsService', 'storeService', '$scope', '$state'];

export default flightsController;