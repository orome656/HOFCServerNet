app.service('JoueurService', ['$q', '$http', '$filter', function ($q, $http, $filter) {
    var _joueurs = [];
    var _matchsFiltered = {};

    return {
        getJoueurs: function () {
            var deferred = $q.defer();
            if (_joueurs.length == 0) {
                this.download().then(function () {
                    deferred.resolve(_joueurs);
                });
            } else {
                deferred.resolve(_joueurs);
            }
            return deferred.promise;
        },
        download: function () {
            var deferred = $q.defer();
            $http.get("/api/Joueur")
            .then(function (results) {
                //Success
                angular.copy(results.data, _joueurs); //this is the preferred; instead of $scope.movies = result.data
                deferred.resolve();
            });
            return deferred.promise;
        }
    };
}]);