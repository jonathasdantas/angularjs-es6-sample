import angular from 'angular';

import HomeComponent from './home.component';

const HomeModule = angular
  .module('app.common.home', [])
  .component('home', HomeComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('home', {
        url: '',
        component: 'home',
        resolve: {
          airports: AirportsService => AirportsService.getAirports()
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default HomeModule;
