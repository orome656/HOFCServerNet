(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('EffectifController', EffectifController);

    EffectifController.$inject = ['$scope', '$routeParams', 'JoueurServices'];

    function EffectifController($scope, $routeParams, JoueurServices) {
        $scope.isLoading = true;
        JoueurServices.query(function (result) {
            $scope.joueurs = result;
            $scope.isLoading = false;
        });
    }
})();