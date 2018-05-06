import template from './projects.template.html';

require('./projects.style.scss');

class projectComponentController{
    constructor(projectService) {
        this.projectService = projectService;
    }
};

projectComponentController.$inject = ['projectService'];

const projectsComponent = {
    template: template,
    comtroller: projectComponentController
};

export default projectsComponent;