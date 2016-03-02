(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('paramsService', ['$resource', function ($resource) {
            return $resource('/api/Params', { }, {
                query: { cache: true, method: 'GET' }
            });
        }]);

})();