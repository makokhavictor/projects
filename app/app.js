// Option 1
// var app = angular.module('main',[]);

// Option 2

(function(){
	var wendani = angular.module('main',['ngRoute','ngAnimate','ngMessages','ngTable','ui.bootstrap.datetimepicker','angularFileUpload','ngDialog']);

	wendani.config(function($routeProvider){
		$routeProvider
			.when('/',{
				controller:'SiteController',
				templateUrl:'app/views/site/home.html'
			})
			
			.otherwise({redirectTo:'/'});

	});
}());