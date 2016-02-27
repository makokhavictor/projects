(function(){
	var SiteController = function($scope,$log,$http,appSettings,$routeParams){
		$scope.appSettings = appSettings;
		$scope.githuburl = appSettings.GITHUB_USERS_URL;
		$scope.userData = false;

		$scope.getUserData = function(username){
			$http.get($scope.githuburl+username)
			.success(function(data,status) {
				$log.log(data);
				if(status == 200){
			     $scope.userData = data;
			     $http.get($scope.userData.repos_url)
				    .success(function(data){
				        $scope.repoData = data;
				    });
				}else{
			     $scope.userData = false;
				}
			});
		};
		$scope.getRepos = function(){
			$scope.repos_url = $scope.userData.repos_url;
			// $http.get(repos_url)
		 //    .success(function(data){
		 //        $scope.repoData = data;
		 //    });
		}
		
	};
	SiteController.$inject  = ['$scope','$log','$http','appSettings','$routeParams'];
	angular.module('main')
  .controller('SiteController',SiteController); 
}());