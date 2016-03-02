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