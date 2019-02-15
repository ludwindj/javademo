
var module = angular.module('mpApp.public');


module.controller('searchPostController', function ($scope, $log, postResource) {
    var pc = this;
    
    pc.posts = [];
    
    pc.search = function(){
        var successCallback = function(data, responseHeaders) {
            pc.posts = data;
        };

        var errorCallback = function(responseHeaders) {
            $log.error('search error ' + responseHeaders);
        };

         postResource.queryAll({"max":100}, successCallback, errorCallback);
    };
    
    pc.delete = function(id){
        
    };
    
    pc.search();
});


module.controller('editPostController', function ($scope, $log, $stateParams, $location, postResource) {
    $scope.location = $location.path();
    $scope.post = {};
    $scope.get = function(){
        var successCallback = function(data, responseHeaders) {
            $log.info('retrieved successfuly ' + JSON.stringify(data));
            $scope.post = data;
        };

        var errorCallback = function(responseHeaders) {
            $log.error('error while searching ' + responseHeaders);
        };
        
        postResource.query({id:$stateParams.id}, successCallback, errorCallback);
    };

    $scope.save = function () {

        var successCallback = function(data, responseHeaders) {
            $log.info('updating successfuly ' + data);
            $location.path('/posts');
        };

        var errorCallback = function(responseHeaders) {
            $log.error('error while persisting');
        };

         //postResource.update($scope.post, successCallback, errorCallback);
         
         $scope.post.$update(successCallback, errorCallback);

    };
    
    $scope.delete = function () {

        var successCallback = function(data, responseHeaders) {
            $log.info('removed successfuly ' + data);
            $location.path('/posts');
        };

        var errorCallback = function(responseHeaders) {
            $log.error('error while persisting');
        };

         //postResource.update($scope.post, successCallback, errorCallback);
         
         $scope.post.$remove(successCallback, errorCallback);

    };
    
    $scope.get();

});

module.controller('newPostController', function ($scope, $log, $location, postResource) {

    $scope.post = {};

    $scope.save = function () {

        var successCallback = function(data, responseHeaders) {
            $log.info('saved successfuly ' + data);
            $location.path('/posts');
        };

        var errorCallback = function(responseHeaders) {
            $log.error('error while persisting');
        };

         postResource.save($scope.post, successCallback, errorCallback);

    };
    
    $scope.cancel = function () {
        $scope.post = {};
    };

});