import template from './sidebar-right.template.html';

class sidebarRightCntroller {
    constructor($scope, $state) {
        this.$state = $state;
        this.contentText = contentText;
        this.$scope = $scope;
    }

    $onInit() {
        
      }

    $onChange(changes) {
    }
}

sidebarRightCntroller.$inject = ['$scope', '$state'];

const sidebarRightComponent = {
    template: template,
    controller: sidebarRightCntroller
};

export default sidebarRightComponent;

let contentText = `For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens. And to be sure, that is the exciting area of astronomy that accounts for it’s huge popularity. So to the uninitiated, the idea of “radio astronomy” seems strange. There are two reasons for that. First is that humans are far more visual than audio oriented. And the second is that radio astronomy doesn’t really involve “listening” to the cosmos except to the extent that scientists who use this sophisticated form of “stargazing” do not rely on visual study to conduct their work.

To appreciate what is really exciting about radio astronomy, first we have to shift how we view astronomy. That is because to professional astronomers, studying the universe is more about frequencies than it is about visual documentation of phenomenon. This takes us back to Physics 101.

Light, obviously, is the physical phenomenon that empowers our ability to use our visual confirmation system, e.g. our eyes to appreciate something, in this case the stars. So when we look up at the heavens, we can see the light e`;