function contentRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/content');
    $urlRouterProvider.when('/', '/content');
    $stateProvider
      .state('content', {
        url: '/content',
        component: 'content'
      })
      .state('customers', {
        url: '/customers',
        component: 'customers'
      })
      .state('pay-details', {
        url: '/pay-details',
        component: 'payDetail'
      })
  }
  /* @ngInject */
  export default contentRoutes;
  