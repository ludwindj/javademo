
var module = angular.module('mpApp.public');

module.component('promisesComponent', {
    templateUrl: 'app/public/promises/detail.html',
    bindings:{
        view:"@"
    },
    controller: function ($log, $http, $q, helloService, comm, postResource) {
	
	  this.hello = "";
	  this.serverHello = "";
	  this.posts = [];

	  //  Promise chaining
	  this.testPromise = function() {
//		  helloService.getHello()
//	      .then(function(result) {
//	        this.hello = result;
//	        return $http.get(comm.url + '/hello');
//	      })
//	      .then(function(result) {
//		        this.serverHello = result.data;
//		        return ;
//		   })
//		   .then(function(result) {
//			   this.posts = result;
//		   })
//	      .catch(function(error) {
//		    console.log("An error occured: " + error);
//		  });
		  
		  var allPromise = $q.all([  
			  	helloService.getHello(),
			  	$http.get(comm.url + '/hello'),
			  	postResource.queryAll({"max":100}).$promise
			]);

			allPromise.then(function(values) {  
			    this.hello = values[0];
			    this.serverHello = values[1].data;
			    this.posts = values[2];
			    $log.info('promises done');
			});
	  };
    
    }
});
