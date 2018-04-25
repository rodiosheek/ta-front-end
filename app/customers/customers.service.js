function customersService($http) {
    function getAll() {
        return '---Customers---';
    }
    function get(id) {
        return `Customer with ID: ${id}`;
    }

    return {
        getAll, get
    }
}

customersService.$inject = ['$http'];

export default customersService;