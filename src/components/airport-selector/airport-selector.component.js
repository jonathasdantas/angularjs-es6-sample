import template from './airport-selector.html';
import controller from './airport-selector.controller';
import './airport-selector.scss';

const AirportSelectorComponent = {
  bindings: {
    airport: '<',
    airports: '<',
    placeholder: '@',
    onUpdate: '&'
  },
  template,
  controller
};

export default AirportSelectorComponent;