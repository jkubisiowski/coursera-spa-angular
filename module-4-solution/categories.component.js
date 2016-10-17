(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
