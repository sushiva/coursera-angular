(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.checkIfTooMuch = function() {
            var lunchItems = $scope.lunchItems;
            if (lunchItems.length > 0) {
                var count = 0;
                var lunchArr = lunchItems.split(",");
                if (lunchArr.length > 4) {
                  $scope.message = "Too much!"
                } else {
                    $scope.message = "Enjoy!"
                }
            } else {
              $scope.message = "Ooops...Lunch Items cannot be empty!";
            }
        };
    }
})();
