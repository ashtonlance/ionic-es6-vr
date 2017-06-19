import { assign } from 'lodash';

export default class AppController {
  /*@ngInject*/
  constructor($state, userService, $scope) {
    assign(this, $scope, { $state, userService });

    this.userService.getUsers().then(
      response => {
        this.videos = response.data;
      },
      error => {
        this.error = 'something went wrong';
      }
    );
  }

  openVideo(source) {
    localStorage.setItem('VideoSource', source);
    this.$state.go('video');
  }
}
