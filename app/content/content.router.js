function contentRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/content');
    $urlRouterProvider.when('/', '/content');
    $stateProvider
      .state('content', {
        url: '/content',
        component: 'content'
      })
      .state('flighs', {
        url: '/flighs',
        component: 'flights'
      })
  }
  /* @ngInject */
  export default contentRoutes;
  