// Option 1
// var app = angular.module('main',[]);

// Option 2

(function(){
	var app = angular.module('main',['ngRoute','ngAnimate','ngTable']);

	app.config(function($routeProvider){
		$routeProvider
			.when('/',{
				controller:'SiteController',
				templateUrl:'app/views/site/home.html'
			})
			.when('/repos',{
				controller:'SiteController',
				templateUrl:'app/views/site/repos.html'
			})
			
			.otherwise({redirectTo:'/'});

	});
}());