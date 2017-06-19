import appTemplate from './app.html';

/*@ngInject*/
const AppConfig = ($stateProvider, $urlRouterProvider, $qProvider) => {
  $stateProvider.state('home', {
      url: '/',
      template: appTemplate,
      controller: 'AppController',
      controllerAs: 'app'
  });

  $urlRouterProvider.otherwise('/');
  $qProvider.errorOnUnhandledRejections(false);
};

export default AppConfig;
