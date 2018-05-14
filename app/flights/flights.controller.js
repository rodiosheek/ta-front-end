
class flightsController {
    constructor(flightsService, storeService, $scope, $state, _) {
        this.flightsService = flightsService;
        this.storeService = storeService;
        this.flights = [];
        this.services = null;

        this.$scope = $scope;
        
        this.store = null;
        
        this.$state = $state;

        this.passengers = 1;  
        this._ = _;
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

        let store = this.storeService.getStore();
        

        this.flightsService.getByProject(project.id).then(
            flights => {
                this.to_flights = flights.filter(fl => fl.direction == 1);
                this.back_flights = flights.filter(fl => fl.direction == 2);

                if(store.flights) {

                    this.flights = this.to_flights.filter(fl => store.flights.includes(fl.id));
                    
                    this.flights = this.flights.concat(
                        this.back_flights.filter(fl => store.flights.includes(fl.id))
                    );
                }

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

    setFlight(flight, add) {
        
        let ids = this.flights.map(fl => fl.id).indexOf(flight.id);

        if(ids !== -1) {
            this.flights.splice(ids, 1);
        } else {
            this.flights.push(flight);
        }

        this.storeService.setStore('flights', this.flights.map(fl => fl.id));
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

flightsController.$inject = ['flightsService', 'storeService', '$scope', '$state', '_'];

export default flightsController;