import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './periquisList.html';

class PeriquisList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      periquis() {
        return Periquis.find();
      }
    });
  }
}

const name = 'periquisList';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl,
  controllerAs: name,
  controller: PeriquisList
});
