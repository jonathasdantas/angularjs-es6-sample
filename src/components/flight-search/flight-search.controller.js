/**
 * Flight Search Component Controller
 * 
 * @class FlightSearch
 */
class FlightSearch {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  $onInit() { }

  /**
   * Callback to get Airports Information
   * 
   * @param {any} $event 
   * @memberof FlightSearch
   */
  onAirportsSelected($event) {
    this.from = $event.from;
    this.to = $event.to;
  }

  /**
   * Callback to get Dates Information
   * 
   * @param {any} $event 
   * @memberof FlightSearch
   */
  onDatesSelected($event) {
    this.start = $event.start;
    this.end = $event.end;
  }

  /**
   * On Click Event Callback
   * 
   * @memberof FlightSearch
   */
  findFlights() {
    if (this.from && this.to && this.start && this.end) {
      this.state.go('flight-list', {
        from: this.from.iataCode,
        to: this.to.iataCode,
        start: this.start,
        end: this.end,
        airports: {
          from: this.from,
          to: this.to
        }
      });
    }
  }
}

export default FlightSearch;
