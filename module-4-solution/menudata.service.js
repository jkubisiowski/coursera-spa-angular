(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
    $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    })
    .then(function(response) {
      console.log(response);
      return response.data;
    })
  };

  service.getItemsForCategory = function(categoryShortName) {

  }

}

}
)();
