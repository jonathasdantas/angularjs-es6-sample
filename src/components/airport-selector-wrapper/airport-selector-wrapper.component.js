import template from './airport-selector-wrapper.html';
import controller from './airport-selector-wrapper.controller';

const AirportSelectorWrapperComponent = {
  bindings: {
    onUpdate: '&'
  },
  template,
  controller
};

export default AirportSelectorWrapperComponent;
