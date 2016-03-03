(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('JoueurServices', ['$resource', function ($resource) {
            return $resource('/api/Joueur/:id');
        }]);

})();