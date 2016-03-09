(function () {
    'use strict';

    angular
        .module('HOFCApp')
        .factory('CompositionService', CompositionService);

    CompositionService.$inject = ['$resource'];

    function CompositionService($resource) {
        return $resource('/api/Composition/:id', {}, {
            query: {method: 'GET', isArray: true}
        });
    }
})();