import angular from 'angular';

import ServicesModule from '../services/services.module';
import FlightSearchModule from './flight-search/flight-search.module';
import AirportSelectorWrapperModule from './airport-selector-wrapper/airport-selector-wrapper.module';
import FlightListModule from './flight-list/flight-list.module';

import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import DateSelectorComponent from './date-selector/date-selector.component';

const ComponentsModule = angular
  .module('app.components', [
    FlightSearchModule,
    AirportSelectorWrapperModule,
    FlightListModule,
    ServicesModule
  ])
  .component('dateWrapper', DateWrapperComponent)
  .component('dateSelector', DateSelectorComponent)
  .name;

export default ComponentsModule;
