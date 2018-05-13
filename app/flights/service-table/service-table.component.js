import template from './service-table.template.html';

require('./service-table.style.scss');

class serviceTableController {
    constructor() {

    }

    $onInit() {
        console.log(this);
    }

    checkService(service) {
        console.log(service);
    }
}

serviceTableController.$inject = [];

const serviceTableComponent = {
    template: template,
    controller: serviceTableController,
    bindings: {
        services: '<'
    }
}

export default serviceTableComponent;