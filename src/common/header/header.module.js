import angular from 'angular';

import NavModule from '../nav/nav.module';

import HeaderComponent from './header.component';

const HeaderModule = angular
  .module('app.common.header', [
    NavModule
  ])
  .component('header', HeaderComponent)
  .name;

export default HeaderModule;
