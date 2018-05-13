import template from './progress-bar.template.html';

require('./progress-bar.style.scss');

class progressBarController {
    constructor($scope) {
        this.step = [true, false, false];
        this.$scope = $scope;
    }

    $onInit() {
        let self = this;
        this.$scope.$watch(_ => this.stepNumber, function (n, o) {
            if (n) {
                switch (n) {
                    case 1:
                        self.step = [true, false, false];
                        break;
                    case 2:
                        self.step = [true, true, false];
                        break;
                    case 3:
                        self.step = [true, true, true];
                        break;
                }
            }
        });
    }

}

progressBarController.$inject = ['$scope'];

const progressBarComponent = {
    template: template,
    controller: progressBarController,
    bindings: {
        stepNumber: '='
    }
}

export default progressBarComponent;