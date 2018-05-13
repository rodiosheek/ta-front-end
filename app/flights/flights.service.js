
function flightsService($http, host) {

    // function getByProject(project_id) {
    //     return $http({
    //         url: host + '/flights/' + project_id,
    //         methdo: 'GET'
    //     }).then(
    //         data => data.data,
    //         error => console.warn(error)
    //     )
    // };

    function getByProject(project_id) {
        console.log('get flights', project_id);
        let data = {
            back_flights: __flights,
            to_flights: __flights
        }
        return Promise.resolve(data);
    }

    function getPassangersNumders() {
        return Promise.resolve(
            __getPassangersNumdersMock(10)
        );
    }

    function getServicesByProject(project_id) {
        return Promise.resolve(__services);
    }

    function __getPassangersNumdersMock(number) {
        if(number <= 0) return [];
        return Array.from({length: number}, (v,k) => k).splice(1,number);
    }

    return {
        getByProject,
        getPassangersNumders,
        getServicesByProject
    }
}

flightsService.$inject = ['$http', 'host'];

export default flightsService;

let __services = [
    {id: 1, name: 'Service 1', data: '25.08.18', price_gross: 40},
    {id: 2, name: 'Service 2', data: '25.08.18', price_gross: 13},
    {id: 3, name: 'Service 3', data: '25.08.18', price_gross: 422},
    {id: 4, name: 'Service 4', data: '25.08.18', price_gross: 12},
];

let __flights = [
    {
        "id": 60, "user_id": 12,
        "project_id": 8,
        "number": "2651",
        "number_internal": "L-41",
        "restriction_code": "",
        "origin_airport_id": 2,
        "destination_airport_id": 1,
        "origin_airport_details": "",
        "destination_airport_details": "",

        "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air",

        "flight_time": "2015-01-21 08:45:00",
        "setting_time": "0000-00-00 00:00:00",
        "land_time": "2015-01-21 12:05:00",
        "seats": 70,
        "department": null,
        "airline_id": 1,
        "base_price": "0.00",
        "vat_item": 0,
        "commission_rate": "0.00",
        "fuel_tax": "0.00",
        "port_tax": "0.00",
        "price_net": "0.00",
        "price_gross": "0.00",
        "fare_basis": "",
        "commission_strategy_id": 1,
        "source_type_id": null,
        "luggage": null,
        "pnr": null,
        "currency_id": 1,
        "airplane_id": 0,
        "supplier_id": 0,
        "description": "",
        "approved": 0,
        "changed": 0,
        "status": 0,
        "direction": 1,
        "ordered": 0,
        "attached_account": 0,
        "weight": 0, "created_at": "2014-07-14 12:33:06", "updated_at": "2014-11-03 14:01:26", "deleted_at": null, "day_of_week": 4, "origin_city_id": 5, "destination_city_id": 2, "sold": 70, "reserved": 0, "available": 0, "amount": "0.00"
    },
    {
        "id": 61, "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air", "user_id": 12, "project_id": 8, "number": "2654", "number_internal": "L-41", "restriction_code": "", "origin_airport_id": 1, "destination_airport_id": 2, "origin_airport_details": "", "destination_airport_details": "", "flight_time": "2015-01-26 00:55:00", "setting_time": "0000-00-00 00:00:00", "land_time": "2015-01-26 04:20:00", "seats": 70, "department": null, "airline_id": 1, "base_price": "0.00", "vat_item": 0, "commission_rate": "0.00", "fuel_tax": "0.00", "port_tax": "0.00", "price_net": "349.00", "price_gross": "380.00", "fare_basis": "", "commission_strategy_id": 1, "source_type_id": null, "luggage": null, "pnr": null, "currency_id": 1, "airplane_id": 0, "supplier_id": 3, "description": "", "approved": 0, "changed": 0, "status": 0, "direction": 2, "ordered": 0, "attached_account": 0, "weight": 0, "created_at": "2014-07-14 12:34:26", "updated_at": "2014-11-03 14:01:39", "deleted_at": null, "day_of_week": 2, "origin_city_id": 2, "destination_city_id": 5, "sold": 70, "reserved": 0, "available": 0, "amount": "26600.00"
    },
    {
        "id": 30815, "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air", "user_id": 325, "project_id": 8, "number": null, "number_internal": null, "restriction_code": null, "origin_airport_id": 5661, "destination_airport_id": 5660, "origin_airport_details": null, "destination_airport_details": null, "flight_time": "2018-01-02 00:00:00", "setting_time": "2018-01-02 00:00:00", "land_time": "2018-01-02 00:00:00", "seats": null, "department": null, "airline_id": 1020, "base_price": "0.00", "vat_item": 0, "commission_rate": "0.00", "fuel_tax": "0.00", "port_tax": "0.00", "price_net": "0.00", "price_gross": "0.00", "fare_basis": "", "commission_strategy_id": 1, "source_type_id": 2, "luggage": null, "pnr": null, "currency_id": 1, "airplane_id": 61, "supplier_id": 0, "description": null, "approved": 0, "changed": 0, "status": 0, "direction": 1, "ordered": 0, "attached_account": 0, "weight": 0, "created_at": "2018-01-02 15:47:27", "updated_at": "2018-01-02 15:47:27", "deleted_at": null, "day_of_week": 3, "origin_city_id": 5233, "destination_city_id": 5232, "sold": 0, "reserved": 0, "available": 0, "amount": "0.00"
    },
    {
        "id": 33, "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air", "user_id": 325, "project_id": 8, "number": null, "number_internal": null, "restriction_code": null, "origin_airport_id": 5661, "destination_airport_id": 5660, "origin_airport_details": null, "destination_airport_details": null, "flight_time": "2018-01-02 00:00:00", "setting_time": "2018-01-02 00:00:00", "land_time": "2018-01-02 00:00:00", "seats": null, "department": null, "airline_id": 1020, "base_price": "0.00", "vat_item": 0, "commission_rate": "0.00", "fuel_tax": "0.00", "port_tax": "0.00", "price_net": "0.00", "price_gross": "0.00", "fare_basis": "", "commission_strategy_id": 1, "source_type_id": 2, "luggage": null, "pnr": null, "currency_id": 1, "airplane_id": 61, "supplier_id": 0, "description": null, "approved": 0, "changed": 0, "status": 0, "direction": 1, "ordered": 0, "attached_account": 0, "weight": 0, "created_at": "2018-01-02 15:47:27", "updated_at": "2018-01-02 15:47:27", "deleted_at": null, "day_of_week": 3, "origin_city_id": 5233, "destination_city_id": 5232, "sold": 0, "reserved": 0, "available": 0, "amount": "0.00"
    },
    {
        "id": 65, "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air", "user_id": 325, "project_id": 8, "number": null, "number_internal": null, "restriction_code": null, "origin_airport_id": 5661, "destination_airport_id": 5660, "origin_airport_details": null, "destination_airport_details": null, "flight_time": "2018-01-02 00:00:00", "setting_time": "2018-01-02 00:00:00", "land_time": "2018-01-02 00:00:00", "seats": null, "department": null, "airline_id": 1020, "base_price": "0.00", "vat_item": 0, "commission_rate": "0.00", "fuel_tax": "0.00", "port_tax": "0.00", "price_net": "0.00", "price_gross": "0.00", "fare_basis": "", "commission_strategy_id": 1, "source_type_id": 2, "luggage": null, "pnr": null, "currency_id": 1, "airplane_id": 61, "supplier_id": 0, "description": null, "approved": 0, "changed": 0, "status": 0, "direction": 1, "ordered": 0, "attached_account": 0, "weight": 0, "created_at": "2018-01-02 15:47:27", "updated_at": "2018-01-02 15:47:27", "deleted_at": null, "day_of_week": 3, "origin_city_id": 5233, "destination_city_id": 5232, "sold": 0, "reserved": 0, "available": 0, "amount": "0.00"
    },
    {
        "id": 77, "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air", "user_id": 325, "project_id": 8, "number": null, "number_internal": null, "restriction_code": null, "origin_airport_id": 5661, "destination_airport_id": 5660, "origin_airport_details": null, "destination_airport_details": null, "flight_time": "2018-01-02 00:00:00", "setting_time": "2018-01-02 00:00:00", "land_time": "2018-01-02 00:00:00", "seats": null, "department": null, "airline_id": 1020, "base_price": "0.00", "vat_item": 0, "commission_rate": "0.00", "fuel_tax": "0.00", "port_tax": "0.00", "price_net": "0.00", "price_gross": "0.00", "fare_basis": "", "commission_strategy_id": 1, "source_type_id": 2, "luggage": null, "pnr": null, "currency_id": 1, "airplane_id": 61, "supplier_id": 0, "description": null, "approved": 0, "changed": 0, "status": 0, "direction": 1, "ordered": 0, "attached_account": 0, "weight": 0, "created_at": "2018-01-02 15:47:27", "updated_at": "2018-01-02 15:47:27", "deleted_at": null, "day_of_week": 3, "origin_city_id": 5233, "destination_city_id": 5232, "sold": 0, "reserved": 0, "available": 0, "amount": "0.00"
    },
    {
        "id": 235, "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air", "user_id": 325, "project_id": 8, "number": null, "number_internal": null, "restriction_code": null, "origin_airport_id": 5661, "destination_airport_id": 5660, "origin_airport_details": null, "destination_airport_details": null, "flight_time": "2018-01-02 00:00:00", "setting_time": "2018-01-02 00:00:00", "land_time": "2018-01-02 00:00:00", "seats": null, "department": null, "airline_id": 1020, "base_price": "0.00", "vat_item": 0, "commission_rate": "0.00", "fuel_tax": "0.00", "port_tax": "0.00", "price_net": "0.00", "price_gross": "0.00", "fare_basis": "", "commission_strategy_id": 1, "source_type_id": 2, "luggage": null, "pnr": null, "currency_id": 1, "airplane_id": 61, "supplier_id": 0, "description": null, "approved": 0, "changed": 0, "status": 0, "direction": 1, "ordered": 0, "attached_account": 0, "weight": 0, "created_at": "2018-01-02 15:47:27", "updated_at": "2018-01-02 15:47:27", "deleted_at": null, "day_of_week": 3, "origin_city_id": 5233, "destination_city_id": 5232, "sold": 0, "reserved": 0, "available": 0, "amount": "0.00"
    },
    {
        "id": 124, "origin_airport": "Kiew",
        "destination_airport": "London",
        "airline": "British Air", "user_id": 325, "project_id": 8, "number": null, "number_internal": null, "restriction_code": null, "origin_airport_id": 5661, "destination_airport_id": 5660, "origin_airport_details": null, "destination_airport_details": null, "flight_time": "2018-01-02 00:00:00", "setting_time": "2018-01-02 00:00:00", "land_time": "2018-01-02 00:00:00", "seats": null, "department": null, "airline_id": 1020, "base_price": "0.00", "vat_item": 0, "commission_rate": "0.00", "fuel_tax": "0.00", "port_tax": "0.00", "price_net": "0.00", "price_gross": "0.00", "fare_basis": "", "commission_strategy_id": 1, "source_type_id": 2, "luggage": null, "pnr": null, "currency_id": 1, "airplane_id": 61, "supplier_id": 0, "description": null, "approved": 0, "changed": 0, "status": 0, "direction": 1, "ordered": 0, "attached_account": 0, "weight": 0, "created_at": "2018-01-02 15:47:27", "updated_at": "2018-01-02 15:47:27", "deleted_at": null, "day_of_week": 3, "origin_city_id": 5233, "destination_city_id": 5232, "sold": 0, "reserved": 0, "available": 0, "amount": "0.00"
    }
];