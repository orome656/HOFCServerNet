(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('articleService', ['$resource', '$http', function ($resource, $http) {
            var _actus = [];

            var _getActus = function (url, callback, errCallback) {
                var deferred = $q.defer();
                $http.post("/api/ParsePage", '"'+url+'"')
                     .then(function (results) {
                         //Success
                         angular.copy(results.data, _actus); //this is the preferred; instead of $scope.movies = result.data
                         deferred.resolve(_actus);
                     }, function (results) {
                         //Error
                     })
                return deferred.promise;
            }

            return {
                actus: _actus,
                getActus: _getActus
            };
        }]);

})();