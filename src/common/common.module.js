import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ComponentsModule from '../components/components.module';

import HomeModule from './home/home.module';
import HeaderModule from './header/header.module';
import FooterModule from './footer/footer.module';

const CommonModule = angular
  .module('app.common', [
    uiRouter,
    HomeModule,
    HeaderModule,
    FooterModule,
    ComponentsModule
  ])
  .name;

export default CommonModule;
