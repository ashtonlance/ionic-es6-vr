import { assign } from 'lodash';

export default class DemoController {
    /*@ngInject*/
    constructor($scope) {
        assign(this, {
            $scope,
        });
        this.demoVideo = 'assets/videos/360RobotDemo.mp4'
    }

    removeTechnology(technology) {
        this.technologies.splice(this.technologies.indexOf(technology), 1);
    }
}
