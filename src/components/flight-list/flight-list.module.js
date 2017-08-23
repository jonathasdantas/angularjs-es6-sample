import angular from 'angular';

import FlighListComponent from './flight-list.component';

const FlightListModule = angular
  .module('components.flightList', [])
  .component('flightList', FlighListComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('flight-list', {
        url: '/flight-list/:from/:to/:start/:end',
        component: 'flightList',
        parent: 'home',
        params: {
          airports: null
        }
      });
    
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default FlightListModule;
