(function () {
'use strict';

angular.module('MenuApp', ['ui.router', 'Data'])
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.html',
    controller: 'CategoriesController as categoryCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state("categories.items", {
      url: "/items/{categoryShortName}",
      templateUrl: 'items.html',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        items: ["MenuDataService", "$stateParams", function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });

  }

})();
