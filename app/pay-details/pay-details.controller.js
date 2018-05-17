
class payDetailController {
    constructor(payDetailsService, $window, $state, storeService) {
        this.payDetailsService = payDetailsService;
        this.$window = $window;
        this.$state = $state;

        this.storeService = storeService;

        this.store = null;

        this.flights = [];
        this.services = [];
        this.customers = [];
    }

    $onInit() {
        let self = this;
        //Always redirect ot flights page after refresh
        this.$window.onload = function() {
            self.$state.go('content');
        }

        this.store = this.storeService.getStore();
        
        this.flights = this._parse(this.store.flights_store);
        this.services = this._parse(this.store.services_store);
        this.customers = this._parse(this.store.customers_store);
        console.log(this);
    }

    _parse(data) {
        return JSON.parse(data);
    }
}

payDetailController.$inject = ['payDetailsService', '$window', '$state', 'storeService'];

export default payDetailController;