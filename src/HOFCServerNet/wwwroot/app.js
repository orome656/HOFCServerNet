(function () {
    'use strict';

    var app = angular.module('HOFCApp', [
        // Angular modules 
        'ngRoute',
        'ngResource',

        // Custom modules 

        // 3rd Party Modules
        'ngMaterial',
        'ngSanitize',
        'md.data.table',
        'ngAnimate'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'views/actualites.html',
              controller: 'ActusController'
          })
          .when('/classements/:categorie', {
              templateUrl: 'views/classement.html',
              controller: 'ClassementController'
          })
          .when('/calendriers/:categorie', {
              templateUrl: 'views/calendrier.html',
              controller: 'CalendrierController'
          })
          .when('/agendas/:semaine', {
              templateUrl: 'views/agenda.html',
              controller: 'AgendaController'
          })
          .when('/journees/:equipe/:idJournee', {
              templateUrl: 'views/journee.html',
              controller: 'JourneeController'
          })
          .when('/diaporama/:url*', {
              templateUrl: 'views/diaporama.html',
              controller: 'DiaporamaController'
          })
          .when('/article/:url*', {
              templateUrl: 'views/article.html',
              controller: 'ArticleController'
          })
          .when('/joueur', {
              templateUrl: 'views/effectif.html',
              controller: 'EffectifController'
          })
          .when('/joueur/:id', {
              templateUrl: 'views/joueur.html',
              controller: 'JoueurController'
          })
    }]);

    app.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout', '$log', '$filter', 'paramsService', function ($scope, $mdSidenav, $timeout, $log, $filter, paramsService) {

        $scope.menu = [{
            titre: 'Actualites',
            lien: '#/'
        }, {
            titre: 'Classements',
            lien: '#/classements/equipe1'
        }, {
            titre: 'Calendriers',
            lien: '#/calendriers/equipe1'
        }, {
            titre: 'Agenda',
            lien: '#/agendas/' + $filter('date')(new Date(), 'yyyy-MM-dd')
        }, {
            titre: 'Journee Equipe 1',
            lien: '#/journees/equipe1/1'
        }, {
            titre: 'Journee Equipe 2',
            lien: '#/journees/equipe2/1'
        }, {
            titre: 'Journee Equipe 3',
            lien: '#/journees/equipe3/1'
        }, {
            titre: 'Effectif',
            lien: '#/joueur'
        }]
        $scope.selected = null;
        $scope.selectMenu = selectMenu;
        $scope.toggleSidenav = toggleSidenav;

        paramsService.query();

        //*******************
        // Internal Methods
        //*******************

        function toggleSidenav(name) {
            $mdSidenav(name).toggle();
        }

        function selectMenu(muppet) {
            $scope.selected = angular.isNumber(muppet) ? $scope.muppets[muppet] : muppet;
            $scope.toggleSidenav('left');
        }
    }])
})();
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

(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('CalendrierController', CalendrierController);

    CalendrierController.$inject = ['$scope', '$filter', '$routeParams', '$location', 'matchsServices'];

    function CalendrierController($scope, $filter, $routeParams, $location, matchsServices) {
        $scope.categorie = $routeParams.categorie;
        $scope.matchs = null;
        matchsServices.query(function (result) {
            $scope.matchs = $filter('CalendrierFilter')(result, $routeParams.categorie);
        });

        $scope.selectedIndex = parseInt($routeParams.categorie[$routeParams.categorie.length - 1]) -1;
        	
        $scope.tabs = [{
            title: 'Equipe 1',
            categorie: 'equipe1'
        },{
    		title: 'Equipe 2',
    		categorie: 'equipe2'
    	},{
        	title: 'Equipe 3',
        	categorie: 'equipe3'
        }]
        	
        $scope.onTabSelected = function(tab) {
            $location.url('/calendriers/' + tab.categorie);
        };
        
    }
})();

(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('ClassementController', ClassementController);

    ClassementController.$inject = ['$scope', '$filter', '$routeParams', '$location', 'classementService'];

    function ClassementController($scope, $filter, $routeParams, $location, classementService) {
        $scope.ranking = null;
        $scope.categorie = $routeParams.categorie;
        $scope.selectedIndex = parseInt($routeParams.categorie[$routeParams.categorie.length - 1]) - 1;

        $scope.tabs = [{
            title: 'Equipe 1',
            categorie: 'equipe1'
        }, {
            title: 'Equipe 2',
            categorie: 'equipe2'
        }, {
            title: 'Equipe 3',
            categorie: 'equipe3'
        }]
        $scope.query = {
            filter: '',
            order: ['-points', '-diff']
        };

        $scope.onChange = function (order) {
            $scope.query.order = order
        };

        $scope.onTabSelected = function (tab) {
            $location.url('/classements/' + tab.categorie);
        };

        classementService.query({ categorie: $routeParams.categorie }, function (result) {
            $scope.ranking = result;
        });

    }
})();
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

angular
    .module('HOFCApp')
    .filter('AgendaFilter', function () {
    return function (input, date) {
        if (input == null || input.length == 0)
            return [];

        var curr = new Date(date);
        var previousMonday = curr.getDate() - curr.getDay() + 1;
        
        var previousMondayDay = new Date(curr.setDate(previousMonday));
        previousMondayDay.setHours(0, 0, 0, 0);
        var nextMondayDay = new Date(previousMondayDay.getTime());
        nextMondayDay.setDate(nextMondayDay.getDate() + 7);

        var filteredArray = [];
        angular.forEach(input, function (item) {
            if(item.date != null) {
                var date = new Date(item.date);
                if (date.getTime() > previousMondayDay.getTime() && date.getTime() < nextMondayDay.getTime() && 
                    (item.equipe1.indexOf('HORGUES ODOS') != -1 || item.equipe2.indexOf('HORGUES ODOS') != -1)) {
                    filteredArray.push(item);
                }
            }
        });
        return filteredArray;
    }
});
angular
    .module('HOFCApp').filter('CalendrierFilter', function () {
    return function (input, categorie) {
        if (input == null || input.length == 0)
            return [];
        var filteredArray = [];
        angular.forEach(input, function (item) {
            if (item.competition != null && item.competition.categorie == categorie && (item.equipe1.indexOf('HORGUES ODOS') != -1 || item.equipe2.indexOf('HORGUES ODOS') != -1)) {
                filteredArray.push(item);
            }
        });
        return filteredArray;
    }
});
angular
    .module('HOFCApp').filter('JourneeFilter', function () {
    return function (input, categorie, journee) {
        if (input == null || input.length == 0)
            return [];
        var filteredArray = [];
        angular.forEach(input, function (item) {
            if (item.competition != null && item.competition.categorie == categorie && (item.equipe1.indexOf('HORGUES ODOS') != -1 || item.equipe2.indexOf('HORGUES ODOS') != -1)
                && item.idJournee != null && item.idJournee == journee) {
                filteredArray.push(item);
            }
        });
        return filteredArray;
    }
});
(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('actusServices', ['$resource', function ($resource) {
            return $resource('/api/Actu', {}, {
                query: { method: 'GET', isArray: true }
            });
        }]);

})();
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
(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('classementService', ['$resource', function ($resource) {
            return $resource('/api/Classement/:categorie', null, {
                query: { method: 'GET', isArray: true }
            });
        }]);

})();
(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('JoueurServices', ['$resource', function ($resource) {
            return $resource('/api/Joueur', { }, {
                query: { cache: true, method: 'GET', isArray: true }
            });
        }]);

})();
(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('matchsServices', ['$resource', function ($resource) {
            return $resource('/api/Match', {}, {
                query: { method: 'GET', params: {}, isArray: true }
            });
        }]);

})();
(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('paramsService', ['$resource', function ($resource) {
            return $resource('/api/Params', { }, {
                query: { cache: true, method: 'GET', isArray: true }
            });
        }]);

})();