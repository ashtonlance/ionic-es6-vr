import { assign } from 'lodash';

export default class AboutController {
    /*@ngInject*/
    constructor($scope) {
        assign(this, {
            $scope,
        });
        this.logo = 'assets/img/banner.png'
    }

    
}
