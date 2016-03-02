(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$routeParams', '$mdToast', 'articleService'];

    function ArticleController($scope, $routeParams, $mdToast, articleService) {
        $scope.isLoading = true;
        articleService.getArticle($routeParams.url).then(function (results) {
            $scope.isLoading = false;
            $scope.article = results;
        });
    }
})();
