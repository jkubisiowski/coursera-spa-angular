(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
  $scope.message = "";
  $scope.text = ""
  $scope.displayMessage = function() {
    var words = $scope.text.split(",")
    
    if(words.length <=3) {
        $scope.message = "Enjoy!"
    }
    if(words.length > 3) {
      $scope.message = "Too much!"
    }
    if(words[0] == "") {
      $scope.message = "Please enter data first"
    }
  };

}

})();
