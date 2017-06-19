import VideoTemplate from './video.html';

/*@ngInject*/
const VideoConfig = ($stateProvider) => {
    $stateProvider.state('video', {
        url: '/video',
        template: VideoTemplate,
        controller: 'VideoController',
        controllerAs: 'video'
    })
};

export default VideoConfig;
