(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('ActusController', ActusController);

    ActusController.$inject = ['$scope', 'actusServices'];

    function ActusController($scope, actusServices) {
        $scope.actus = actusServices.query();
    }
})();
