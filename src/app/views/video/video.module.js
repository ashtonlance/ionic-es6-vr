import videoRun from './video.run';
import videoConfig from './video.config';
import videoControllers from './video.controllers';

const videoModule = angular
    .module('ionicSeed.video', [
        videoControllers.name
    ])
    .run(videoRun)
    .config(videoConfig)

export default videoModule;
