(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.sayMessage = function(){
   return  "Kevin Chen is the best developer";
  };

  $scope.feedKevin = function(){
    $scope.stateOfBeing = "fed";
  };
}

})();
