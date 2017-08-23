import moment from 'moment';

/**
 * Date Wrapper Componente Controller
 * 
 * @class DateWrapper
 */
class DateWrapper {
  constructor($stateParams) {
    'ngInject';
    this.params = $stateParams;
  }

  $onInit() {
    if (this.params.start && this.params.end) {
      this.setStartDate({ date: new Date(moment(this.params.start)) });
      this.setEndDate({ date: new Date(moment(this.params.end)) });
    }
  }

  /**
   * Callback to set Start Date
   * 
   * @param {any} $event 
   * @memberof DateWrapper
   */
  setStartDate($event) {
    this.startDate = $event.date;

    if (this.startDate) {
      if (moment(this.startDate) > moment(this.endDate)) {
        this.endDate = moment(this.startDate).add(2, 'd').toDate();
      }
    }

    this.emmitEvent();
  }

  /**
   * Callback to set End Date
   * 
   * @param {any} $event 
   * @memberof DateWrapper
   */
  setEndDate($event) {
    this.endDate = $event.date;

    if (this.endDate) {
      if (moment(this.endDate) < moment(this.startDate)) {
        this.startDate = moment(this.endDate).subtract(2, 'd').toDate();
      }
    }

    this.emmitEvent();
  }


  /**
   * Emits Event to provide external behaviour
   * 
   * @memberof DateWrapper
   */
  emmitEvent() {
    if (this.startDate && this.endDate) {
      this.onUpdate({
        $event: {
          start: moment(this.startDate).format("YYYY-MM-DD"),
          end: moment(this.endDate).format("YYYY-MM-DD")
        }
      });
    }
  }
}

export default DateWrapper;
