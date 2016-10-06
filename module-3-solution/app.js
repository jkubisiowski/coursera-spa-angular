(function () {
'use strict';

angular.module('Shopping', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];

function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.list = ShoppingListCheckOffService.getToBuyList();

  toBuy.buy = function functionName(index) {
      ShoppingListCheckOffService.buy(index)
  }
}

function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.list = ShoppingListCheckOffService.getAlreadyBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyList = [
    { name: "cookies", quantity: "5" },
    { name: "chips", quantity: "24" },
    { name: "potatos", quantity: "4" },
    { name: "beers", quantity: "13" },
    { name: "apples", quantity: "8" }
  ];
  var boughtList = [];
  service.buy = function (index) {
    var item = toBuyList[index];
    boughtList.push(item);
    toBuyList.splice(index,1);
  };

  service.getToBuyList = function () {
    return toBuyList;
  }
  service.getAlreadyBoughtList = function () {
    return boughtList;
  }

}

})();
