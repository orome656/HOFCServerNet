(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('ClassementController', ClassementController);

    ClassementController.$inject = ['$scope', '$filter', '$routeParams', '$location', 'classementService'];

    function ClassementController($scope, $filter, $routeParams, $location, classementService) {
        $scope.ranking = null;
        $scope.categorie = $routeParams.categorie;
        $scope.selectedIndex = parseInt($routeParams.categorie[$routeParams.categorie.length - 1]) - 1;

        $scope.tabs = [{
            title: 'Equipe 1',
            categorie: 'equipe1'
        }, {
            title: 'Equipe 2',
            categorie: 'equipe2'
        }, {
            title: 'Equipe 3',
            categorie: 'equipe3'
        }]
        $scope.query = {
            filter: '',
            order: ['-points', '-diff']
        };

        $scope.onChange = function (order) {
            $scope.query.order = order
        };

        $scope.onTabSelected = function (tab) {
            $location.url('/classements/' + tab.categorie);
        };

        classementService.query({ categorie: $routeParams.categorie }, function (result) {
            $scope.ranking = result;
        });

    }
})();