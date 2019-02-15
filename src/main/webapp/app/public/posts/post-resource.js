var module = angular.module('mpApp.public');


module.factory('postResource', function ($resource, comm) {
    return $resource(comm.url + '/posts/:id', {
            id : '@id'
        }, {
        'queryAll': {
            method: 'GET',
            isArray: true
        },
        'query' : {
                method : 'GET',
                isArray : false
        },
        'update' : {
            method : 'PUT'
        }
//        'persistImage' : {
//            method : 'POST',
//            url: 'rest/protected/organizations/persist-image'
//        }
    });
});

