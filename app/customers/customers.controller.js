
class customersController {
    constructor(customersService) {
        this.customersService = customersService;
        this.test = null;
    }

    $onInit() {
        this.test = 'customersController';

        console.log('---', this.customersService.get(22));
    }
}

customersController.$inject = ['customersService'];

export default customersController;