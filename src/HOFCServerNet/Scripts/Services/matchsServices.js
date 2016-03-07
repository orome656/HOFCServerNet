(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('matchsServices', ['$resource', function ($resource) {
            return $resource('/api/Match/:id', {}, {
                query: { method: 'GET', params: {}, isArray: true }
            });
        }]);

})();