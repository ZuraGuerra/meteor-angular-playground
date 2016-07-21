import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './aviary.html';
import { name as PeriquisList } from '../periquisList/periquisList';

class Aviary {}

const name = 'aviary';
console.log("AVIARY");

export default angular.module(name, [
  angularMeteor,
  PeriquisList
]).component(name, {
  template,
  controllerAs: name,
  controller: Aviary
});
