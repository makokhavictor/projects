(function(){
	var SiteController = function($scope,$log,$http,appSettings,$routeParams,NgTableParams){
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
				    .success(function(_data){
				    	$scope.repoData = _data;
				        $scope.tableParams = new NgTableParams({}, {filterDelay: 0, dataset: _data});
				    });
				}else{
			     $scope.userData = false;
				}
			});
		};

		$scope.getIssuesCount = function(repo){
			var url = "https://api.github.com/repos/"+repo.full_name+"/issues/";
			$http.get(url)
		    .success(function(_data){
		    	$scope.issue_count = _data.length;
		    });
		}
		
		
	};
	SiteController.$inject  = ['$scope','$log','$http','appSettings','$routeParams','NgTableParams'];
	angular.module('main')
  .controller('SiteController',SiteController); 
}());