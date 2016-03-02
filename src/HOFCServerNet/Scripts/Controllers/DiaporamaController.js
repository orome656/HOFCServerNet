(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('DiaporamaController', DiaporamaController);

    DiaporamaController.$inject = ['$scope', '$routeParams', '$mdToast', 'articleService'];

    function DiaporamaController($scope, $routeParams, $mdToast, articleService) {
        $scope.isLoading = true;
        articleService.getArticle($routeParams.url).then(function (results) {
            $scope.isLoading = false;
            $scope.article = results;
        });
    }
})();
