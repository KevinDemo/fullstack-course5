(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Kevin Chen";
  $scope.sayHello = function(){
    return "Hello Kevin";
  }
});

})();
