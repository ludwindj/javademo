
var module = angular.module('mpApp.public', ['mpApp.ui','ui.router','ngResource']);

module.constant('comm',{
    url : '/javademo/rest'
});

module.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/')
	$stateProvider.state('public', {
            abstract : true,
            data : {
                title : 'MP Enterprise'
            }
        });
	
	$stateProvider.state('public.demo',{
            url: '/',
            component: 'demoComponent', // The component's name
            data:{
                title: 'Demo'
            },
            lazyLoad: function ($transition$) {
                return $transition$.injector().get('$ocLazyLoad').load('app/public/demo/demo-component.js');
            }
        });
	
	$stateProvider.state('public.demoDirectives',{
            url: '/demo-directives',
            data:{
                title: 'Demo Directives'
            },
            component: 'demoDirectivesComponent',
            lazyLoad: function ($transition$) {
                return $transition$.injector().get('$ocLazyLoad').load('app/public/demo-directives/demo-directives-component.js');
            }
        });

	$stateProvider.state('public.promises',{
            url: '/promises',
            data:{
                title: 'Promises'
            },
            component: 'promisesComponent',
            lazyLoad: function ($transition$) {
                    return $transition$.injector().get('$ocLazyLoad').load(['app/public/promises/promises-component.js',
                    'app/public/promises/promises-service.js',
                    'app/public/posts/post-resource.js',]);
            }
        });
//	
	$stateProvider.state('public.posts', {
            url : '/posts',
            data : {
                title : 'Posts'
            },

            resolve: { 
                    searchPostFiles: function($ocLazyLoad) {
                         return $ocLazyLoad.load(['app/public/posts/post-resource.js',
                             'app/public/posts/post-controller.js']);
                }
            },
            views : {
                    "root@app" : {
                        templateUrl : 'app/public/posts/search.html',
                        controller : 'searchPostController'
                    }
            }
        });
//	
//	$stateProvider.state('public.posts.edit', {
//        url : '/update/:id',
//        views : {
//            "root@app" : {
//                templateUrl : 'app/public/posts/detail.html',
//                controller : 'editPostController'
//            }
//        }
//    
//	});
//	
//	$stateProvider.state('public.posts.new', {
//        url : '/new',
//        views : {
//            "root@app" : {
//                templateUrl : 'app/public/posts/detail.html',
//                controller : 'newPostController'
//            }
//        }
//    
//	});

});
