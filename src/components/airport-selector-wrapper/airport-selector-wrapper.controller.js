/**
 * Aiport Selector Wrapper Component Controller
 * @class AirportSelectorWrapper
 */
class AirportSelectorWrapper {
  constructor(AirportsService, CheapFlightsService, $stateParams) {
    'ngInject';

    this.airportsService = AirportsService;
    this.s = CheapFlightsService;

    this.params = $stateParams;
  }

  $onInit() {
    this.loadAirportsInfo();
  }

  /**
   * Set airports collection from the AirportsService
   * 
   * @memberof AirportSelectorWrapper
   */
  loadAirportsInfo() {
    this.airportsService.getAirports().then(res => {
      this.from = res.airports;

      if (this.params.from && this.params.to) {
        this.selectedFromAirport = this.from[this.params.from];
        this.selectedToAirport = this.from[this.params.to];
      }
    });
  }

  /**
   * Set From Airport Callback and To Airports Filter
   * 
   * @param {any} $event 
   * @memberof AirportSelectorWrapper
   */
  setAvailableRoutes($event) {
    let fromAirport = this.from[$event.airport.toUpperCase()];

    if (fromAirport) {
      let to = {};

      fromAirport.routes.forEach((toCode) => {
        to[toCode] = this.from[toCode];
      });

      this.to = to;
      this.selectedFromAirport = fromAirport;
    } else {
      this.to = undefined;
      this.selectedFromAirport = undefined;
    }
  }

  /**
   * Set To Airport Callback
   * 
   * @param {any} $event 
   * @memberof AirportSelectorWrapper
   */
  setSelectedToAirport($event) {
    let toAirport = this.from[$event.airport.toUpperCase()];

    if (toAirport) {
      this.selectedToAirport = toAirport;
      this.emmitEvent();
    }
  }

  /**
   * Emits Event to provide external behaviour
   * 
   * @memberof AirportSelectorWrapper
   */
  emmitEvent() {
    this.onUpdate({
      $event: {
        from: this.selectedFromAirport,
        to: this.selectedToAirport
      }
    });
  }

}

export default AirportSelectorWrapper;
