function contentRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/content');
    $urlRouterProvider.when('/', '/content');
    $stateProvider
      .state('content', {
        url: '/content',
        component: 'content'
      })
      .state('flights', {
        url: '/flights',
        component: 'flights'
      })
      .state('customers', {
        url: '/customers',
        component: 'customers'
      })
      .state('pay_details', {
        url: '/pay-details',
        component: 'payDetail'
      })
      .state('thank_you_page', {
        url: '/thank-you-page',
        component: 'thankYouPage'
      })
  }
  /* @ngInject */
  export default contentRoutes;
