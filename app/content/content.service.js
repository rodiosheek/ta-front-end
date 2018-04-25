function contentService($state) {
    this.current_flights = [];
    
    function setFlights (...flight) {
        this.current_flights.push(flight);
    }

    function getFlights() {
        return this.current_flights;
    }

    return {
        setFlights, getFlights
    };
}

contentService.$inject = ['$state'];

export default contentService;