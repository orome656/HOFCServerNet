(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('CompositionController', CompositionController);

    CompositionController.$inject = ['$scope', '$routeParams', '$filter', 'matchsServices', 'JoueurServices', 'CompositionService'];

    function CompositionController($scope, $routeParams, $filter, matchsServices, JoueurServices, CompositionService) {
        $scope.title = 'CompositionController';

        $scope.save = function () {
            var compo = $filter('filter')($scope.joueurs, { PosteCompo: '' });
            for (var i = 0; i < compo.length; i++) {
                CompositionService.save({ PosteCompo: compo[i].PosteCompo, IdJoueur: compo[i].Id, IdMatch: $routeParams.id });
            }
        }

        matchsServices.get({ id: $routeParams.id }, function (matchs) {
            $scope.matchs = matchs;
        });
        
        JoueurServices.query(function (joueurs) {
            $scope.joueurs = joueurs;
        });

    }
})();
