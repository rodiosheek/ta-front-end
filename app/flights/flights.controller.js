
class flightsController {
    constructor(flightsService, contentService) {
        this.flightsService = flightsService;
        this.contentService = contentService;
        this.test = null;
        this.flights = [];
        this.services = [];

        this.currentProject = [];
    }

    $onInit() {

    }

    $onChange(changes) {
        console.log('changes', changes);
    }
}

flightsController.$inject = ['flightsService', 'contentService'];

export default flightsController;