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
          .when('/joueurs', {
              templateUrl: 'views/effectif.html',
              controller: 'EffectifController'
          })
          .when('/joueur/:id?', {
              templateUrl: 'views/joueur.html',
              controller: 'JoueurController'
          })
          .when('/matchs', {
              templateUrl: 'views/matchs.html',
              controller: 'MatchsController'
          })
          .when('/composition/:id', {
              templateUrl: 'views/composition.html',
              controller: 'CompositionController'
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
            lien: '#/joueurs'
        }, {
            titre: 'Matchs',
            lien: '#/matchs'
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