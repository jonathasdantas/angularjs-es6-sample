import angular from 'angular';

import ApiService from './api.service';
import AirportsService from './airports/airports.service';
import CheapFlightsService from './cheap-flights/cheap-flights.service';

const ServicesModule = angular
  .module('app.services', [])
  .service('ApiService', ApiService)
  .service('AirportsService', AirportsService)
  .service('CheapFlightsService', CheapFlightsService)
  .name;

export default ServicesModule;
