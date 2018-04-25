
class contentController {
    constructor(contentService, $stateParams) {
        this.contentService = contentService;
        this.test = null;
    }

    $onInit() {
        console.log('Init', this);
        this.test = 'Rodion';
    }
}

contentController.$inject = ['contentService', '$stateParams'];

export default contentController;