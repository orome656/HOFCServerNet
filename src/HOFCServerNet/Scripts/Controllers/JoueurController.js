(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('JoueurController', JoueurController);

    JoueurController.$inject = ['$scope', '$routeParams', 'JoueurServices'];

    function JoueurController($scope, $routeParams, JoueurServices) {
        $scope.idJournee = $routeParams.id;
        $scope.isLoading = true;

        JoueurServices.query({ id: $routeParams.id }, function(result) {
            $scope.joueur = result;
            $scope.isLoading = false;
        });
    }
})();
