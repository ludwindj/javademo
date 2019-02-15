
var module = angular.module('mpApp.public');


module.component('demoComponent', {
    templateUrl: 'app/public/demo/demo.html',
    bindings:{
        view:"@"
    },
    controller: function () {
        this.dev = {};

        this.setModel = function(){
            this.dev = {
                name: 'Victor Orozco',
                email: 'vorozco@nabenik.com'
            };
        };   
    }
});

module.controller('demoController', function () {
    this.dev = {foo:'test'};
});
        
