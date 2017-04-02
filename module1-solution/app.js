(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
$scope.message = "";
$scope.lunchItems = "";
$scope.checkIfTooMuch = function() {
var lunchItems = $scope.lunchItems;
   if (lunchItems.length > 0) {
     $scope.message = "Lunch Items found" ;
   } else {
     $scope.message = "Lunch Items Cannot be empty" ;
   }
}
}


})();
