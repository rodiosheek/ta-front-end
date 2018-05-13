class flightFilterController {
    constructor() {
        this.filter =- null;
    }

    $OnInit() {
        console.log('filter', this);
    }

    $onChange(obj) {
        cosnole.log('change', obj);
    }
}

flightFilterController.$inject = [];

export default flightFilterController;