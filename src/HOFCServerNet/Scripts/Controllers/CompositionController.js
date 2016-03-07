(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('CompositionController', CompositionController);

    CompositionController.$inject = ['$scope', '$routeParams', 'matchsServices', 'JoueurServices'];

    function CompositionController($scope, $routeParams, matchsServices, JoueurServices) {
        $scope.title = 'CompositionController';
        matchsServices.get({ id: $routeParams.id }, function (matchs) {
            $scope.matchs = matchs;
        });
        
        JoueurServices.query(function (joueurs) {
            $scope.joueurs = joueurs;
        });

    }
})();
