import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('aviary', [
  angularMeteor
])
  .controller('PeriquisController', function($scope) {
    'ngInject';
    
    $scope.periquis =
    [
      {
        'name': 'Milorad',
        'color': 'green',
        'favoriteFruit': 'apple'
      }
    ]
  });
