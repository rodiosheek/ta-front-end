
class contentController {
    constructor(contentService, $stateParams) {
        this.contentService = contentService;
        this.step = 1;
    }

    $onInit() {
        console.log('content controller');
    }
}

contentController.$inject = ['contentService', '$stateParams'];

export default contentController;