import angular from 'angular';

import FlighSearchComponent from './flight-search.component';

const FlightSearchModule = angular
  .module('components.flightSearch', [])
  .component('flightSearch', FlighSearchComponent)
  .name;

export default FlightSearchModule;
