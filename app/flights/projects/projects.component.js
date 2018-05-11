import template from './projects.template.html';

require('./projects.style.scss');

class projectComponentController{
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.projects = [];
        console.log(this);
    }

    $onInit () {
        this.projectsService.getAll().then(
            data => this.projects = data
        );
    }

    selectProject(project) {
        this.projects = this.projects.map(pr => {
            pr.active = pr.id == project.id ? true : false;
            return pr;
        })
        this.onUpdate({project: project});
    }
};

projectComponentController.$inject = ['projectsService'];

const projectsComponent = {
    template: template,
    controller: projectComponentController,
    bindings: {
        onUpdate: '&'
    }
};

export default projectsComponent;