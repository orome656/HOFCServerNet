(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('CalendrierController', CalendrierController);

    CalendrierController.$inject = ['$scope', '$filter', '$routeParams', '$location', 'matchsServices'];

    function CalendrierController($scope, $filter, $routeParams, $location, matchsServices) {
        $scope.categorie = $routeParams.categorie;
        $scope.matchs = null;
        matchsServices.query(function (result) {
            $scope.matchs = $filter('CalendrierFilter')(result, $routeParams.categorie);
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
        
    }
})();
