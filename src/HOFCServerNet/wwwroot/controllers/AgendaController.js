app.controller('AgendaController', ['$scope', '$routeParams', '$filter', '$location', 'MatchService', function ($scope, $routeParams, $filter, $location, MatchService) {
	$scope.semaine = $routeParams.semaine;
	$scope.isLoading = true;
	$scope.currentWeekMonday = getMonday();
	MatchService.getMatchForWeek($routeParams.semaine).then(function (result) {
	    $scope.agenda = result;
	    $scope.isLoading = false;
	});
	$scope.tabs = [{
		date: removeWeek($scope.currentWeekMonday,2)
	},{
		date: removeWeek($scope.currentWeekMonday,1)
	},{
		date: $scope.currentWeekMonday
	},{
		date: addWeek($scope.currentWeekMonday,1)
	},{
		date: addWeek($scope.currentWeekMonday,2)
	}]
	
	
	$scope.selectedIndex = getTabIndexForDate(new Date($routeParams.semaine));
	
	
	$scope.onTabSelected = function(tab) {
		$location.url('/agendas/' + $filter('date')(tab.date, "yyyy-MM-dd"));
	};
	
	function getTabIndexForDate(d) {
		var day = d.getDay(),
			diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
		var monday = new Date(d.setDate(diff));
		var i = 0;
		for(i = 0; i < $scope.tabs.length; i++) {
			if(monday.getFullYear() === $scope.tabs[i].date.getFullYear() &&
				monday.getMonth() === $scope.tabs[i].date.getMonth() &&
				monday.getDate() === $scope.tabs[i].date.getDate()) {
				break;
			}
		}
		return i;
	}
	
	function getMonday() {
		var d = new Date();
		var day = d.getDay(),
			diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
		return new Date(d.setDate(diff));
	}
	
	function removeWeek(d, i) {
		return new Date(d.getTime() - i * 7 * 24 * 60 * 60 * 1000);
	}
	
	function addWeek(d, i) {
		return new Date(d.getTime() + i * 7 * 24 * 60 * 60 * 1000);
	}
}]);