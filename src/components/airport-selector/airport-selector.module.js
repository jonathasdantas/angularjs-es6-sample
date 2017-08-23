import angular from 'angular';

import ObjectFilter from './object.filter';
import AirportSelectorComponent from './airport-selector.component';

const AirportSelectorModule = angular
  .module('components.airport-selector', [])
  .component('airportSelector', AirportSelectorComponent)
  .filter('objectFilter', ObjectFilter)
  .name;

export default AirportSelectorModule;
