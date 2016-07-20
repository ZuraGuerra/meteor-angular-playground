import angular from 'angular';
import aviaryDeps from './dependencies/aviary.js';

angular.module('aviary', aviaryDeps)
  .controller('PeriquisController', function ($scope) {
    'ngInject';
    
    $scope.periquis = [
      {
        'name': 'Milorad',
        'color': 'green',
        'favoriteFruit': 'apple'
      }
    ];
  });
