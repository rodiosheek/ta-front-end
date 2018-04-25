
class flightsController {
    constructor(flightsService, contentService) {
        this.flightsService = flightsService;
        this.contentService = contentService;
        this.test = null;
        this.flights = [];
        this.services = [];
    }

    $onInit() {
        this.test = 'Flights component';
        this.flights = this.flightsService.getAll();

        let current_flight = this.flightsService.get(17);

        this.contentService.push(current_flight);
    }
}

flightsController.$inject = ['flightsService', 'contentService'];

export default flightsController;