
class contentController {
    constructor(storeService, $stateParams) {
        this.storeService = storeService;
        this.step = 1;
    }

    $onInit() {
        console.log('content controller', this);
    }
}

contentController.$inject = ['storeService', '$stateParams'];

export default contentController;