(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('ActusController', ActusController);

    ActusController.$inject = ['$scope', 'actusServices'];

    function ActusController($scope, actusServices) {
        actusServices.query(function (results) {
            $scope.actus = results;
        });
    }
})();
