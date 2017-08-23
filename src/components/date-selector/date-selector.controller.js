/**
 * Date Selector Componente Controller
 * @class DateSelector
 */
class DateSelector {
  constructor() {
    'ngInject';
  }

  /**
   * Provides default value
   * @param {any} changes 
   * @memberof DateSelector
   */
  $onChanges(changes) {
    if (changes.date && changes.date.currentValue) {
      this.date = changes.date.currentValue;
      this.emmitEvent();
    }
  }

  /**
   * Calls emmit method after a new Date set
   * @memberof DateSelector
   */
  onUpdateDate() {
    this.emmitEvent();
  }

  /**
   * Emits Event to provide external behaviour
   * @memberof DateSelector
   */
  emmitEvent() {
    this.onUpdate({
      $event: {
        date: this.date
      }
    });
  }
}

export default DateSelector;
