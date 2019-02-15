describe('demoController', function() {
var $controller, demoController;
    // Load ui.router and our components.users module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('ngResource'));
    beforeEach(angular.mock.module('oc.lazyLoad'));
    beforeEach(angular.mock.module('mpApp'));
    beforeEach(angular.mock.module('mpApp.ui'));
    beforeEach(angular.mock.module('mpApp.public'));
    // Add the module for our Users service

    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
      demoController = $controller('demoController', {});
    }));

    it('should be defined', function() {
      expect(demoController).toBeDefined();
    });
    
    // Add a new test for our expected controller behavior
    it('should return test', function() {
      expect(demoController.dev.foo).toEqual('test');
    });


});