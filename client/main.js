import angular from 'angular';
import aviaryDeps from './dependencies/aviary.js';
import periquisCtr from './controllers/periquis.js';

angular
  .module('aviary', aviaryDeps)
  .controller('PeriquisController', perisquisCtr);
