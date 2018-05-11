
class flightsController {
    constructor(flightsService, contentService) {
        this.flightsService = flightsService;
        this.contentService = contentService;
        this.test = null;
        this.flights = [];
        this.services = [];

        this.currentProject = null;

        this.flights = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
        ];
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