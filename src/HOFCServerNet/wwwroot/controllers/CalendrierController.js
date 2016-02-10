app.controller('CalendrierController', ['$scope', '$routeParams', '$location', 'MatchService', function ($scope, $routeParams, $location, MatchService) {
    $scope.categorie = $routeParams.categorie;
    $scope.calendrier = null;
    MatchService.getMatchForTeam($routeParams.categorie).then(function (result) {
        $scope.calendrier = result;
    });
	$scope.selectedIndex = parseInt($routeParams.categorie[$routeParams.categorie.length - 1]) -1;
	
	$scope.tabs = [{
		title: 'Equipe 1',
		categorie: 'equipe1'
	},{
		title: 'Equipe 2',
		categorie: 'equipe2'
	},{
		title: 'Equipe 3',
		categorie: 'equipe3'
	}]
	
	$scope.onTabSelected = function(tab) {
		$location.url('/calendriers/' + tab.categorie);
	};
}]);