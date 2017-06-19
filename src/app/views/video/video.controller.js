import { assign } from 'lodash';
import videojs from 'video.js';
import panorama from 'videojs-panorama';

export default class VideoController {
  /*@ngInject*/
  constructor($scope) {
    assign(this, {
      $scope
    });
    $scope.$on('$ionicView.beforeEnter', function() {
      console.log('entering');
      screen.orientation.lock('landscape');
      if (window.StatusBar && StatusBar.isVisible) {
        StatusBar.hide();
      }
    });
    $scope.$on('$ionicView.beforeLeave', function() {
      console.log('leaving');
      let oldPlayer = document.getElementById('videojs-panorama-player');
      videojs(oldPlayer).dispose();
      screen.orientation.lock('portrait');
      if (window.StatusBar && StatusBar.isVisible) {
        StatusBar.show();
      }
    });
    let source = localStorage.getItem('VideoSource');

    // screen.orientation.addEventListener('change', function() {
    var that = this;
    setTimeout(function() {
      let videoElement = document.getElementById('videojs-panorama-player');
      var width = window.innerWidth;
      var height = window.innerHeight;
      that.player = videojs(videoElement, {}, () => {});
      that.player.src({ src: source, type: 'video/mp4' });
      that.player.width(width), that.player.height(height);

      panorama(that.player, {
        autoMobileOrientation: true,
        initFov: 100,
        initLat: -5,
        initLon: -180,
        showNotice: false
      });

      that.player.on('VRModeOn', function() {
        that.player.controlBar.fullscreenToggle.trigger('tap');
      });
    }, 500);
    // });
  }

  goBack() {
    window.history.back();
  }
}
