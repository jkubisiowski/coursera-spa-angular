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
    controller: 'CategoriesController as categories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });
  // .state('items', {
  //   url: 'items/{categoryId}',
  //   templateUrl: 'items.html',
  //   controller: 'ItemsController as items',
  // });
  }

})();
