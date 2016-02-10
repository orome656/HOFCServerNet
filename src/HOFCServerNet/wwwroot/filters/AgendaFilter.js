app.filter('AgendaFilter', function () {
    return function (input, date) {
        if (input == null || input.length == 0)
            return [];

        var curr = new Date(date);
        var previousMonday = curr.getDate() - curr.getDay() + 1;
        
        var previousMondayDay = new Date(curr.setDate(previousMonday));
        previousMondayDay.setHours(0, 0, 0, 0);
        var nextMondayDay = new Date(previousMondayDay.getTime());
        nextMondayDay.setDate(nextMondayDay.getDate() + 7);

        var filteredArray = [];
        angular.forEach(input, function (item) {
            if(item.date != null) {
                var date = new Date(item.date);
                if (date.getTime() > previousMondayDay.getTime() && date.getTime() < nextMondayDay.getTime() && 
                    (item.equipe1.indexOf('HORGUES ODOS') != -1 || item.equipe2.indexOf('HORGUES ODOS') != -1)) {
                    filteredArray.push(item);
                }
            }
        });
        return filteredArray;
    }
});