(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('CompositionController', CompositionController);

    CompositionController.$inject = ['$scope']; 

    function CompositionController($scope) {
        $scope.title = 'CompositionController';

    }
})();
