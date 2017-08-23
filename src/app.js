import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';
import AppComponent from './app.component';

angular.module('myApp', [
  uiRouter,
  ComponentsModule,
  CommonModule
])
.component('app', AppComponent);
