app.service('MatchService', ['$q', '$http', '$filter', function ($q, $http, $filter) {
    var _matchs = [];
    var _matchsFiltered = {};

    var _filterMatch = function (equipe) {
        var filteredMatch = $filter('CalendrierFilter')(_matchs, equipe);
        _matchsFiltered[equipe] = $filter('orderBy')(filteredMatch, 'date');
        return _matchsFiltered[equipe];
    }

    var _filterMatchByWeek = function (semaine) {
        var filteredMatch = $filter('AgendaFilter')(_matchs, semaine);
        _matchsFiltered[semaine] = $filter('orderBy')(filteredMatch, 'date');
        return _matchsFiltered[semaine];
    }

    var _filterMatchByJournee = function (equipe, journee) {
        var filteredMatch = $filter('JourneeFilter')(_matchs, equipe, journee);
        _matchsFiltered[equipe + journee] = $filter('orderBy')(filteredMatch, 'date');
        return _matchsFiltered[equipe + journee];
    }

    return {
        getMatchForTeam: function (/*string*/equipe) {
            var deferred = $q.defer();
            if (_matchs.length == 0) {
                this.download().then(function () {
                    deferred.resolve(_filterMatch(equipe));
                });
            } else {
                deferred.resolve(_filterMatch(equipe));
            }
            return deferred.promise;
        },
        getMatchForTeamAndDay: function (/*string*/equipe, /*number*/journee) {
            var deferred = $q.defer();
            if (_matchs.length == 0) {
                this.download().then(function () {
                    deferred.resolve(_filterMatchByJournee(equipe, journee));
                });
            } else {
                deferred.resolve(_filterMatchByJournee(equipe, journee));
            }
            return deferred.promise;
        },
        getMatchForWeek: function (/*string*/semaine) {
            var deferred = $q.defer();
            if (_matchs.length == 0) {
                this.download().then(function () {
                    deferred.resolve(_filterMatchByWeek(semaine));
                });
            } else {
                deferred.resolve(_filterMatchByWeek(semaine));
            }
            return deferred.promise;
        },
        download: function () {
            var deferred = $q.defer();
            $http.get("/api/Match")
            .then(function (results) {
                //Success
                angular.copy(results.data, _matchs); //this is the preferred; instead of $scope.movies = result.data
                deferred.resolve();
            });
            return deferred.promise;
        }
    };
}]);