(function () {
"use strict";

angular.module('public')
.service('DataService', DataService);

DataService.$inject = [];
function DataService() {
  var service = this;
  service.shortName = '';
  service.registered = false;

}
})();
