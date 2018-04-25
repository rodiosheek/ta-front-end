function contentService($state) {
    let store = [];

    function push(data) {
        store.push(data);
    }

    function get() {
        return store;
    }

    function clear() {
        store = [];
    }

    return {
        push, get, clear
    };
}

contentService.$inject = ['$state'];

export default contentService;