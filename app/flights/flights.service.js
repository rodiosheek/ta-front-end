
function flightsService($http, host) {

    function getAll() {
        return '---Flight---';
    }
    function get(id) {
        return `Flight with ID: ${id}`;
    }

    return {
        getAll, get
    }
}

flightsService.$inject = ['$http', 'host'];

export default flightsService;