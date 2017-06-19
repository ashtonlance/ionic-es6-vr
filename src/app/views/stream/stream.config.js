import StreamTemplate from './stream.html';

/*@ngInject*/
const StreamConfig = ($stateProvider) => {
    $stateProvider.state('stream', {
        url: '/stream',
        template: StreamTemplate,
        controller: 'StreamController',
        controllerAs: 'stream'
    })
};

export default StreamConfig;
