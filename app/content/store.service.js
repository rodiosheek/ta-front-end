function storeService(localStorageService, _) {

    let savedStore = localStorageService.get('store');

    let store = _.isEmpty(savedStore) ? {} : savedStore;

    function getStore() {
        return store;
    }

    function setStore(name, data) {
        store[name] = data;
        __saveStore('store', store);
        return store;
    }

    function get(name) {
        return store[name] ? store[name] : null;
    }
    
    function __saveStore(key, val) {
        localStorageService.set('store', val);
        console.log('--store--',localStorageService.get('store'));
    }

    return {
        getStore,
        setStore,
        get
    }
};

storeService.$inject = ['localStorageService', '_'];

export default storeService;