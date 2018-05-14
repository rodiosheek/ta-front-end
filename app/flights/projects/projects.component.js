import template from './projects.template.html';

require('./projects.style.scss');

class projectComponentController{
    constructor(projectsService, storeService) {
        this.projectsService = projectsService;
        this.storeService = storeService;
        this.projects = [];
        this.store = null;
    }

    $onInit () {
        this.projectsService.getAll().then(
            data => {
                this.projects = data;
                this.__initProject(this.projects);
            }
        );
        this.store = this.storeService.getStore();
    }

    selectProject(project) {
        this.projects = this.projects.map(pr => {
            pr.active = pr.id == project.id ? true : false;
            return pr;
        })
        this.onUpdate({project: project});
    }

    __initProject(projects) {
        if(this.projects.length > 0) {
            let seleced_project = this.store['project_id'] ?
                projects.find(pr => pr.id == this.store['project_id']) :
                projects[0];
            this.selectProject(seleced_project);
        }
    }
};

projectComponentController.$inject = ['projectsService', 'storeService'];

const projectsComponent = {
    template: template,
    controller: projectComponentController,
    bindings: {
        onUpdate: '&'
    }
};

export default projectsComponent;