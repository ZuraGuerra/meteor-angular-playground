import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('aviary', [
  angularMeteor
])
  .controller('PeriquisController', function($scope) {
    'ngInject';

    $scope.helpers({
      periquis() {
        return Periquis.find({});
      }
    });
  });
