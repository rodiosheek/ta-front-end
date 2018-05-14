import template from './projects.template.html';

require('./projects.style.scss');

class projectComponentController{
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.projects = [];
    }

    $onInit () {
        this.projectsService.getAll().then(
            data => {
                this.projects = data;
                if(this.projects.length > 0) {
                    this.selectProject(this.projects[0]);
                }
            }
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