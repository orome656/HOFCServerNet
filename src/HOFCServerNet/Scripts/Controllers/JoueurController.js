(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('JoueurController', JoueurController);

    JoueurController.$inject = ['$scope', '$routeParams', 'JoueurServices'];

    function JoueurController($scope, $routeParams, JoueurServices) {
        $scope.idJournee = $routeParams.id;
        $scope.isLoading = true;
        $scope.postes = [
            'G',
            'DD', 'DC', 'DG',
            'MDF', 'MC', 'MG', 'MD', 'MO',
            'AiG', 'AiD', 'BT'
        ]

        $scope.save = function () {
            if ($scope.joueur.Id != null) {
                $scope.joueur.$update({ id: $scope.joueur.Id });
            } else {
                JoueurServices.save($scope.joueur);
            }
        }

        $scope.toggle = function (item) {
            if ($scope.joueur == null)
                $scope.joueur = {Postes:[]}
            if ($scope.joueur.Postes == null)
                $scope.joueur.Postes = [];
            var idx = $scope.joueur.Postes.indexOf(item);
            if (idx > -1) $scope.joueur.Postes.splice(idx, 1);
            else $scope.joueur.Postes.push(item);
        };
        $scope.exists = function (item) {
            if ($scope.joueur != null && $scope.joueur.Postes != null) {
                return $scope.joueur.Postes.indexOf(item) > -1;
            }
            return false;
        };

        if ($routeParams.id) {
            JoueurServices.get({ id: $routeParams.id }, function (result) {
                $scope.joueur = result;
                $scope.isLoading = false;
            });
        }
    }
})();
