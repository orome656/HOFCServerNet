(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('CalendrierController', CalendrierController);

    CalendrierController.$inject = ['$scope', 'matchsServices'];

    function CalendrierController($scope, matchsServices) {
        $scope.matchs = matchsServices.query();
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CalendrierController';

        activate();

        function activate() { }
    }
})();
