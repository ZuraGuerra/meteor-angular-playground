import angular from 'angular';
import aviaryDeps from './dependencies/aviary.js';
import perisquisCtr from './controllers/perisquis.js';

angular
  .module('aviary', aviaryDeps)
  .controller('PeriquisController', perisquisCtr);
