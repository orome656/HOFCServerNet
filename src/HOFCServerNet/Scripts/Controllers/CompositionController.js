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
            var listCompo = [];
            for (var i = 0; i < compo.length; i++) {
                if(compo[i].PosteCompo != null && compo[i].PosteCompo.length > 0)
                    listCompo.push({ PosteCompo: compo[i].PosteCompo, IdJoueur: compo[i].Id, IdMatch: $routeParams.id });
            }
            CompositionService.save(listCompo);
        }

        matchsServices.get({ id: $routeParams.id }, function (matchs) {
            $scope.matchs = matchs;
        });
        
        JoueurServices.query(function (joueurs) {
            $scope.joueurs = joueurs;
            CompositionService.query({ id: $routeParams.id }, function (results) {
                for (var i = 0; i < results.length; i++) {
                    for (var j = 0; j < $scope.joueurs.length; j++) {
                        if ($scope.joueurs[j].Id == results[i].IdJoueur) {
                            $scope.joueurs[j].PosteCompo = results[i].PosteCompo;
                            break;
                        }
                    }
                }
            });
        });


    }
})();
