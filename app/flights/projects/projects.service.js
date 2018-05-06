
function projectService($http, host) {

    const URL = {
        getProjectAll: host + '/api/project',
        getProject: project_id => host + '/api/project/' + project_id
    };

    function getAll() {
        return $http.get(URL.getProjectAll()).then(
            data => data.data,
            error => console.warn(error)
        );
    }

    function get(id) {
        return $http.get(URL.getProject(id)).then(
            data => data.data,
            error => console.warn(error)
        );
    }

    return {
        getAll, get
    }
}

projectService.$inject = ['$http', 'host'];

export default projectService;