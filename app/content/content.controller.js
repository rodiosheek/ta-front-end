
class contentController {
    constructor(contentService, $stateParams) {
        this.contentService = contentService;
        this.test = null;
    }

    $onInit() {
        console.log('content controller');
    }
}

contentController.$inject = ['contentService', '$stateParams'];

export default contentController;