
class payDetailController {
    constructor(payDetailsService) {
        this.payDetailsService = payDetailsService;
        this.test = null;
    }

    $onInit() {
        this.test = 'payDetailController';
    }
}

payDetailController.$inject = ['payDetailsService'];

export default payDetailController;