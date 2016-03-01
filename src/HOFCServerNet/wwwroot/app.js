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

/*
app.controller('ArticleController', ['$scope', '$routeParams', '$mdToast', 'articleService', function ($scope, $routeParams, $mdToast, articleService) {
	$scope.article = articleService.article;
	$scope.url = $routeParams.url;
	$scope.isLoading = true;
	
	articleService.getArticle($routeParams.url, function() {
		$scope.isLoading = false;
	}, function() {
		$scope.isLoading = false;
		$mdToast.show(
			$mdToast.simple()
				.content('Erreur du téléchargement du contenu')
				.hideDelay(3000)
		);
	});
}]);
*/
(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$routeParams', '$mdToast', 'articleService'];

    function ArticleController($scope, $routeParams, $mdToast, articleService) {
        $scope.article = articleService.query({ "url": $routeParams.url });
    }
})();

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
        .factory('articleService', ['$resource', function ($resource) {
            return $resource('/api/ParsePage', {url:null}, {
                query: { cache: true, method: 'POST', isArray: true }
            });
        }]);

})();
(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('classementServices', ['$resource', function ($resource) {
            return $resource('/api/Classement', {}, {
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