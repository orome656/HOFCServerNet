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