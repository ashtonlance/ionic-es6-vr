import { assign } from 'lodash';

export default class AppController {
  /*@ngInject*/
  constructor($state, userService, $scope) {
    assign(this, $scope, { $state, userService });

    // screen.orientation.lock('portrait');

    this.videos = {
      'Card Monroe': {
        source: 'assets/videos/CardMonroe.mp4',
        label: 'Card Monroe 360',
        thumbnail: 'assets/img/thumbnailcardmonroenoplay.png'
      },
      'VIP Montage': {
        source: 'assets/videos/VIPMontage.mp4',
        label: 'VIP Montage',
        thumbnail: 'assets/img/thumbnailmontagenoplay.png'
      },
      'Mann Hummel': {
        source: 'assets/videos/MannHummel.mp4',
        label: 'Mann Hummel',
        thumbnail: 'assets/img/thumbnailmann.png'
      },
      'TennBallet': {
        source: 'assets/videos/BalletTenn.mp4',
        label: 'Ballet Tennessee',
        thumbnail: 'assets/img/thumbnailballet.png'
      },
      'RubyFalls': {
        source: 'assets/videos/RubyFallsTRIM720.mp4',
        label: 'Ruby Falls',
        thumbnail: 'assets/img/thumbnailrubyfalls.png'
      }
    };
  }

  openVideo(source) {
    localStorage.setItem('VideoSource', source);
    this.$state.go('video');
  }
}
