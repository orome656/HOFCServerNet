app.controller('EffectifController', ['$scope', '$routeParams', 'JoueurService', function ($scope, $routeParams, JoueurService) {
    $scope.isLoading = true;
    JoueurService.getJoueurs().then(function (result) {
        $scope.joueurs = result;
        $scope.isLoading = false;
    });
}]);