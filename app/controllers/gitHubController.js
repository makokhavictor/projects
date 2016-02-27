(function(){
	var GitHubController = function($scope,appSettings){
		$scope.appSettings = appSettings;
		
	};
	GitHubController.$inject  = ['$scope','appSettings'];
	angular.module('main')
  .controller('GitHubController',GitHubController); 
}());