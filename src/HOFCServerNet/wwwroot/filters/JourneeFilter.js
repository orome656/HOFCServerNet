app.filter('JourneeFilter', function () {
    return function (input, categorie, journee) {
        if (input == null || input.length == 0)
            return [];
        var filteredArray = [];
        angular.forEach(input, function (item) {
            if (item.competition != null && item.competition.categorie == categorie && (item.equipe1.indexOf('HORGUES ODOS') != -1 || item.equipe2.indexOf('HORGUES ODOS') != -1)
                && item.idJournee != null && item.idJournee == journee) {
                filteredArray.push(item);
            }
        });
        return filteredArray;
    }
});