app.controller('JourneeController', ['$scope', '$routeParams', '$filter', '$location', 'MatchService', 'paramsService', function ($scope, $routeParams, $filter, $location, MatchService, paramsService) {
	$scope.idJournee = $routeParams.idJournee;
	$scope.equipe = $routeParams.equipe;
	$scope.isLoading = true;
	$scope.selectedIndex = $routeParams.idJournee - 1;
	
	MatchService.getMatchForTeamAndDay($routeParams.equipe, $routeParams.idJournee).then(function (result) {
	    $scope.journee = result;
	    $scope.isLoading = false;
	})

	$scope.tabs = []
	
	for (var i = 1; i <= paramsService.params['SEASON_MATCHS_COUNT_' + $scope.equipe.toUpperCase()]; i++) {
		$scope.tabs.push({numero:i});
	}
		
	$scope.onTabSelected = function(tab) {
		$location.url('/journees/'+ $scope.equipe +'/' + tab.numero);
	};
}]);