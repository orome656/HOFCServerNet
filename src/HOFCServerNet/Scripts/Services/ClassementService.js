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