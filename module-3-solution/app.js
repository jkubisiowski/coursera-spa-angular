(function () {
'use strict';

angular.module('Menu', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
MenuSearchService.$inject = ['$http'];

function NarrowItDownController($scope, MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.narrowIt = function()
  {
    MenuSearchService.getMatchedMenuItem(menu.searchTerm).then(function(items)
    {
      console.log(items);
    })

  }
}

function MenuSearchService($http){
  var service = this;
  service.getMatchedMenuItem = function(searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function (result) {
    // process result and only keep items that match
    var foundItems = result.data.menu_items;
    // return processed items
    return foundItems.filter(function(item)
    {
        return item.description.includes(searchTerm)
    })
    });
  }
}

}
)();
