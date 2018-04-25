
function flightsService($http) {
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

flightsService.$inject = ['$http'];

export default flightsService;