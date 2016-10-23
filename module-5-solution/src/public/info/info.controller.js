(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['$http', 'DataService'];
function InfoController($http, DataService) {
  var infoCtrl = this;
  infoCtrl.registered = DataService.registered;
  infoCtrl.firstName = DataService.firstName
  infoCtrl.lastName = DataService.lastName
  infoCtrl.email = DataService.email
  infoCtrl.phone = DataService.phone
  infoCtrl.shortName = DataService.shortName
  infoCtrl.title = ''
  infoCtrl.description = ''
  infoCtrl.imagePath = "https://jkubisiowski-angular.herokuapp.com/images/" + infoCtrl.shortName + ".jpg"


  if(infoCtrl.registered) {
    $http.get('https://jkubisiowski-angular.herokuapp.com/menu_items/'+infoCtrl.shortName+'.json')
    .success(function(response) {
      console.log(response);
      infoCtrl.name = response.name;
      infoCtrl.description = response.description;
    })
    .error(function() {

    })
  };


}


})();
