
function projectsService($http, host) {

    // function getAll() {
    //     return $http({
    //         url: host,
    //         method: 'GET'
    //     }).then(
    //         data => data.data,
    //         error => console.warn(error)
    //     );
    // }
    function getAll() {
        return Promise.resolve(projectsMock);
    }

    let projectsMock = [
        {id: 1, name: 'Project long long name 1'},
        {id: 2, name: 'Project 2'},
        {id: 3, name: 'Project 3'},
        {id: 4, name: 'Project 4'},
        {id: 5, name: 'Project 5'},
        {id: 6, name: 'Project 6'},
    ];

    return {
        getAll
    }
}

projectsService.$inject = ['$http', 'host'];

export default projectsService;