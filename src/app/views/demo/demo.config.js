import aboutTemplate from './demo.html';

/*@ngInject*/
const AboutConfig = ($stateProvider) => {
    $stateProvider.state('demo', {
        url: '/demo',
        template: aboutTemplate,
        controller: 'DemoController',
        controllerAs: 'demo'
    })
};

export default AboutConfig;
