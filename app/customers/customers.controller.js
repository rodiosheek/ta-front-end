
class customersController {
    constructor(customersService, $state, $window) {
        this.customersService = customersService;
        this.$window = $window;
        this.$state = $state;
    }

    $onInit() {
        this.test = 'customersController';
        let self = this;
        //Always redirect ot flights page after refresh
        this.$window.onload = function() {
            self.$state.go('content');
        }
    }
}

customersController.$inject = ['customersService', '$state', '$window'];

export default customersController;