import moment from 'moment';

/**
 * Flight List Component Controller
 * 
 * @class FlightList
 */
class FlightList {
  constructor($stateParams, CheapFlightsService, AirportsService) {
    'ngInject';
    this.params = $stateParams;
    this.service = CheapFlightsService;
    this.airportsService = AirportsService;
  }

  $onInit() {
    this.setParams();
    this.loadFlights();
  }

  /**
   * Set default values when coming from the URL directly
   * 
   * @memberof FlightList
   */
  setParams() {
    this.from = this.params.from;
    this.to = this.params.to;
    this.start = this.params.start;
    this.end = this.params.end;

    this.airports = this.params.airports;

    // Get Airports if we don't have from the state params
    if (!this.airports) {
      this.airportsService.getAirports().then(res => {
        this.airports = {
          from: res.airports[this.from],
          to: res.airports[this.to]
        }
      });
    }
  }

  /**
   * Loads Flights from Service
   * 
   * @memberof FlightList
   */
  loadFlights() {
    this.service
      .getFlights(this.from, this.to, this.start, this.end)
      .then((flights) => this.flights = flights);
  }


  /**
   * Formatted Date to Template
   * 
   * @param {any} date 
   * @returns 
   * @memberof FlightList
   */
  getDate(date) {
    return moment(date).format("DD MMM (dddd)");
  }

  /**
   * Formatted Time to Template
   * 
   * @param {any} date 
   * @returns 
   * @memberof FlightList
   */
  getTime(date) {
    return moment(date).format("hh:mm");
  }
}

export default FlightList;
