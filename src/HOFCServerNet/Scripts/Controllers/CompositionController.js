(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('CompositionController', CompositionController);

    CompositionController.$inject = ['$scope', '$routeParams', '$filter', 'matchsServices', 'JoueurServices'];

    function CompositionController($scope, $routeParams, $filter, matchsServices, JoueurServices) {
        $scope.title = 'CompositionController';

        $scope.save = function () {
            var compo = $filter('filter')($scope.joueurs, { PosteCompo: '' });
            console.log(compo);
        }

        matchsServices.get({ id: $routeParams.id }, function (matchs) {
            $scope.matchs = matchs;
        });
        
        JoueurServices.query(function (joueurs) {
            $scope.joueurs = joueurs;
        });

    }
})();
