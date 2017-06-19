import streamRun from './stream.run';
import streamConfig from './stream.config';
import streamControllers from './stream.controllers';

const streamModule = angular
    .module('ionicSeed.stream', [
        streamControllers.name
    ])
    .run(streamRun)
    .config(streamConfig)

export default streamModule;
