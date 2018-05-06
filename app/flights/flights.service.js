
function flightsService($http, host) {

    const URL = {
        getProjectFlights: (project_if) => host + 'api/flights/project_id/' + project_id,
        getFlight: flight_id => host + '/api/flights/' + flight_id
    };

    function getProjectFlights(project_id) {
        return $http.get(URL.getProjectFlights(project_id)).then(
            data => data.data,
            error => console.warn(error)
        );
    }

    function get(id) {
        return $http.get(URL.getFlight(id)).then(
            data => data.data,
            error => console.warn(error)
        );
    }

    return {
        getProjectFlights, get
    }
}

flightsService.$inject = ['$http', 'host'];

export default flightsService;