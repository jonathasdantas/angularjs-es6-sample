import template from './date-selector.html';
import controller from './date-selector.controller';

const DateSelectorComponent = {
  bindings: {
    date: '<',
    onUpdate: '&'
  },
  template,
  controller
};

export default DateSelectorComponent;
