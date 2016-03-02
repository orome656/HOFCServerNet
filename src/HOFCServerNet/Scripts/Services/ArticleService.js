(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('articleService', ['$q', '$http', function ($q, $http) {
            var _article = [];

            var _getArticle = function (url, callback, errCallback) {
                var deferred = $q.defer();
                $http.post("/api/ParsePage", '"'+url+'"')
                     .then(function (results) {
                         //Success
                         angular.copy(results.data, _article); //this is the preferred; instead of $scope.movies = result.data
                         deferred.resolve(_article);
                     }, function (results) {
                         //Error
                     })
                return deferred.promise;
            }

            return {
                article: _article,
                getArticle: _getArticle
            };
        }]);

})();