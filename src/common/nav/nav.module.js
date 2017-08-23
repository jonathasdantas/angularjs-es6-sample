import angular from 'angular';

import NavComponent from './nav.component';

const NavModule = angular
  .module('app.common.nav', [])
  .component('navHeader', NavComponent)
  .name;

export default NavModule;
