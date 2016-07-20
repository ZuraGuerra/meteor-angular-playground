import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as PeriquisList } from '../imports/ui/components/periquisList/periquisList'

angular.module('aviary', [
  angularMeteor,
  PeriquisList
]);
