
class customersController {
    constructor(customersService, $state, $window, storeService) {
        this.customersService = customersService;
        this.$window = $window;
        this.$state = $state;

        this.storeService = storeService;

        

        this.customers = [];
    }

    $onInit() {
        let self = this;
        //Always redirect ot flights page after refresh
        this.$window.onload = function() {
            self.$state.go('content');
        }

        let customers_number = this.storeService.get('passengers');
        
        if(customers_number > 0) {

            for(let i = 0; i < customers_number; i++) {

                let ctmr =  new this._newCustomer();
                this.customers.push(ctmr);
            }
        }
    }

    _newCustomer() {
        return {
            id_number: '',
            first_name_heb: '',
            lest_name_heb: '',
            first_name: '',
            lest_name: '',
            birth_date: '',
            expire_date: '',
            passport_number: ''
        };
    }
}

customersController.$inject = ['customersService', '$state', '$window', 'storeService'];

export default customersController;