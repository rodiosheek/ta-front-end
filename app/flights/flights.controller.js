
class flightsController {
    constructor(flightsService, contentService) {
        this.flightsService = flightsService;
        this.contentService = contentService;
        this.test = null;
        this.flights = [];
        this.services = [];

        this.currentProject = null;
    }

    $onInit() {

    }

    $onChanges(changes) {
        console.log('changes', changes);
        console.log(this.currentProject);
    }

    selectProject(project) {
        console.log(project);
    }
}

flightsController.$inject = ['flightsService', 'contentService'];

export default flightsController;