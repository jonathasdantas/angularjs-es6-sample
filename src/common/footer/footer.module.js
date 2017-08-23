import angular from 'angular';

import FooterComponent from './footer.component';

const FooterModule = angular
  .module('app.common.footer', [])
  .component('footer', FooterComponent)
  .name;

export default FooterModule;
