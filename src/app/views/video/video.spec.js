import videoControllers from './video.controllers';

describe('Video Component', () => {
    let controller, $scope;

    beforeEach(angular.mock.module(videoControllers.name));

    beforeEach(inject(($controller, $rootScope) => {
        $scope = $rootScope.$new();
        controller = $controller('VideoController', {
            $scope
        });
    }));

    it('should define an array of technologies', () => {
        expect(controller.technologies).to.be.ok;
        expect(controller.technologies.length).to.equal(5);
    });

    it('should remove a technology', () => {
        controller.removeTechnology('SCSS');
        expect(controller.technologies.length).to.equal(4);
        expect(controller.technologies).to.not.contain('SCSS');
    });

    it('should assign scope to the controller instance', () => {
        expect(controller.$scope).to.equal($scope)
    });

})
