function contentRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/content');
    $urlRouterProvider.when('/', '/content');
    $stateProvider
      .state('content', {
        url: '/content',
        component: 'content'
      })
  }
  /* @ngInject */
  export default contentRoutes;
  