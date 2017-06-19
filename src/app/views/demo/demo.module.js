import demoRun from './demo.run';
import demoConfig from './demo.config';
import demoControllers from './demo.controllers';

const demoModule = angular
    .module('ionicSeed.demo', [
        demoControllers.name
    ])
    .run(demoRun)
    .config(demoConfig)

export default demoModule;
