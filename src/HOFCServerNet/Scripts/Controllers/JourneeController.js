(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('JourneeController', JourneeController);

    JourneeController.$inject = ['$scope', '$routeParams', '$filter', '$location', 'matchsServices', 'paramsService'];

    function JourneeController($scope, $routeParams, $filter, $location, matchsServices, paramsService) {
        $scope.idJournee = $routeParams.idJournee;
        $scope.equipe = $routeParams.equipe;
        $scope.isLoading = true;
        $scope.selectedIndex = $routeParams.idJournee - 1;


        matchsServices.query(function (result) {
            $scope.journee = $filter('JourneeFilter')(result, $routeParams.equipe, $routeParams.idJournee);
            $scope.isLoading = false;
        });

        $scope.tabs = []

        paramsService.query(function (result) {
            for (var i = 1; i <= result['SEASON_MATCHS_COUNT_' + $scope.equipe.toUpperCase()]; i++) {
                $scope.tabs.push({ numero: i });
            }
        })
        

        $scope.onTabSelected = function (tab) {
            $location.url('/journees/' + $scope.equipe + '/' + tab.numero);
        };
    }
})();