import template from './sidebar-left.template.html';

class sidebarLeftCntroller {
    constructor($scope, $state) {
        this.$state = $state;
        this.$scope = $scope;
        //Background img default
        this.background = 1;
    }
    
    getBackgroundImg() {
        let current_bg = this.$state.current.name ? this.$state.current.name : 'content';
        console.log(current_bg);
        return `ta-background--img__${current_bg}`;
    }
}

sidebarLeftCntroller.$inject = ['$scope', '$state'];

const sidebarLeftComponent = {
    template: template,
    controller: sidebarLeftCntroller
};

export default sidebarLeftComponent;
