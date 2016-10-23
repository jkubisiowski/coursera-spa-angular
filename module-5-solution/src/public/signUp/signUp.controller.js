(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'DataService'];
function SignUpController($http, DataService) {
  var signUpCtrl = this;

  signUpCtrl.firstName = ''
  signUpCtrl.lastName = ''
  signUpCtrl.email = ''
  signUpCtrl.phone = ''
  signUpCtrl.shortName = ''

  signUpCtrl.showMessage = false;
  signUpCtrl.message = '';

  signUpCtrl.submit = function()
  {
    $http.get('https://jkubisiowski-angular.herokuapp.com/menu_items/'+signUpCtrl.shortName+'.json')
    .success(function() {
      signUpCtrl.showMessage = true;
      signUpCtrl.message = 'Your information has been saved.'
      DataService.firstName = signUpCtrl.firstName;
      DataService.lastName = signUpCtrl.lastName;
      DataService.email = signUpCtrl.email;
      DataService.phone = signUpCtrl.phone;
      DataService.shortName = signUpCtrl.shortName;
      DataService.registered = true;
    })
    .error(function() {
      signUpCtrl.showMessage = true;
      signUpCtrl.message = 'No such menu number exists.'
    })

  }
}


})();
