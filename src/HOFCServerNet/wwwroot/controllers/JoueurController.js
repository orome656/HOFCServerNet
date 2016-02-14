app.controller('JoueurController', ['$scope', '$routeParams', 'JoueurService', function ($scope, $routeParams, JoueurService) {
    $scope.idJournee = $routeParams.id;
    $scope.isLoading = true;

    JoueurService.getJoueurById($routeParams.id).then(function (result) {
        $scope.joueur = result;
        $scope.isLoading = false;
    });
}]);