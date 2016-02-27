(function(){
	var SiteController = function($scope,appSettings){
		$scope.appSettings = appSettings;
		
	};
	SiteController.$inject  = ['$scope','appSettings'];
	angular.module('main')
  .controller('SiteController',SiteController); 
}());