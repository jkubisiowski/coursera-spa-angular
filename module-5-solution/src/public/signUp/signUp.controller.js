(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = [];
function SignUpController() {
  var signUpCtrl = this;

  signUpCtrl.firstName = ''
  signUpCtrl.lastName = ''
  signUpCtrl.email = ''
  signUpCtrl.phone = ''
  signUpCtrl.shortName = ''

  signUpCtrl.submit = function()
  {

  }
}


})();
