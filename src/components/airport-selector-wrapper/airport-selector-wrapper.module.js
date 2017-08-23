import angular from 'angular';

import AirportSelectorModule from '../airport-selector/airport-selector.module';
import AirportSelectorWrapperComponent from './airport-selector-wrapper.component';

const AirportSelectorWrapperModule = angular
  .module('components.airport-selector-wrapper', [
    AirportSelectorModule
  ])
  .component('airportSelectorWrapper', AirportSelectorWrapperComponent)
  .name;

export default AirportSelectorWrapperModule;