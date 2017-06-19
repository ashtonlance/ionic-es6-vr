import userService from './services/userService/userService';

export default angular
    .module('ionicSeed.services', [])
    .constant('apiUrl', 'https://s3.amazonaws.com/360vipvideos/videos.json')
    .service('userService', userService)
