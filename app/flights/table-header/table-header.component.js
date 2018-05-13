import template from './table-header.template.html';

require('./table-header.style.scss');

class tableHeaderController {
    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {
        
    }

}

tableHeaderController.$inject = ['$scope'];

const tableHeaderComponent = {
    template: template,
    controller: tableHeaderController,
    bindings: {
        flights: '<'
    }
}

export default tableHeaderComponent;