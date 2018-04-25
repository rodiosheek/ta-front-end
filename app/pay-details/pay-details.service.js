function payDetailsService($http) {
  function get(id) {
      return `pay ${id}`;
  }

  return {
      get
  }
}

payDetailsService.$inject = ['$http'];

export default payDetailsService;