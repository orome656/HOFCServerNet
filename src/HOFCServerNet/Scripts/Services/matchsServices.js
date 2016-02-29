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