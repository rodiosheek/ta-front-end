
class flightsController {
    constructor(flightsService, contentService, $scope) {
        this.flightsService = flightsService;
        this.contentService = contentService;
        this.test = null;
        this.flights = null;
        this.services = null;

        this.$scope = $scope;
    }

    $onInit() {

    }

    $onChanges(changes) {
        
    }

    selectProject(project) {
        this.flightsService.getByProject(project.id).then(
            flights => {
                this.flights = flights;
                this.$scope.$apply();
                console.log(this.flights);
            },
            error => console.warn(error)
        );
    }


}

flightsController.$inject = ['flightsService', 'contentService', '$scope'];

export default flightsController;