(function () {
'use strict';

angular.module('Menu', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
MenuSearchService.$inject = ['$http'];

function NarrowItDownController($scope, MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = "";
  narrow.found = []
  narrow.empty = false;

  narrow.narrowIt = function()
  {
    MenuSearchService.getMatchedMenuItem(narrow.searchTerm).then(function(items) {
      narrow.found = items;
      if(items.length==0)
        narrow.empty = true;
    });
  }
  narrow.remove = function(index) {
    narrow.found.splice(index,1);
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
    return foundItems.filter(function(item) {
        return item.description.includes(searchTerm)
    })
    });
  }
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'menuList.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

}
)();
