
class contentController {
    constructor(contentService, $stateParams) {
        this.contentService = contentService;
        this.test = null;
    }

    $onInit() {
        console.log('Init', this);
        this.test = 'content';

        console.log('---', this.contentService.get());
    }
}

contentController.$inject = ['contentService', '$stateParams'];

export default contentController;