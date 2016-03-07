(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('MatchsController', MatchsController);

    MatchsController.$inject = ['$scope', '$location', 'matchsServices'];

    function MatchsController($scope, $location, matchsServices) {

        $scope.go = function (path) {
            $location.path(path);
        }

        matchsServices.query(function (results) {
            $scope.matchs = results;
        });
    }
})();
