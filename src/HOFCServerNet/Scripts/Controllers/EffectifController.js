(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('EffectifController', EffectifController);

    EffectifController.$inject = ['$scope', '$routeParams', '$location', 'JoueurServices'];

    function EffectifController($scope, $routeParams, $location, JoueurServices) {
        $scope.isLoading = true;

        $scope.go = function (path) {
            $location.path(path);
        };

        $scope.remove = function (index) {
            if ($scope.joueurs != null && $scope.joueurs.length > index) {
                var joueur = $scope.joueurs[index];
                JoueurServices.delete({ id: joueur.Id }, function (result) {
                    $scope.joueurs.splice(index, 1);
                });
            }
        }

        JoueurServices.query(function (result) {
            $scope.joueurs = result;
            $scope.isLoading = false;
        });
    }
})();