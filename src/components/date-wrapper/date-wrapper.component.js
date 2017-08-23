import template from './date-wrapper.html';
import controller from './date-wrapper.controller';

export const DateWrapperComponent = {
  bindings: {
    onUpdate: '&'
  },
  template,
  controller
};
