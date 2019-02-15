
var module = angular.module('mpApp.public');


module.factory('helloService', function($http, $q, $timeout, comm) {

    //    Create a class that represents our name service.
    function helloService() {
    
        var self = this;
        
        //    Initially the name is unknown....
        self.hello = null;
          
        //    getName returns a promise which when fulfilled returns the name.
        self.getHello = function() {
            
            //    Create a deferred operation.
            var deferred = $q.defer();
            
            //    If we already have the name, we can resolve the promise.
            if(self.hello !== null) {
                deferred.resolve(self.hello + " (from Cache!)");
            } else {
                //    Get the name from the server.
            	$timeout(function() { 
            		self.hello = 'JavaScript is everywhere';
            		deferred.resolve(self.hello + " (from Server!)");
            		//deferred.reject(response);
            		
            		}, 5000);
                
            }
            
            //    Now return the promise.
            return deferred.promise;
        };
    }
    
    return new helloService();
});