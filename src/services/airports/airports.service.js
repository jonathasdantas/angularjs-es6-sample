/**
 * Airport Service Json Api
 * 
 * @class AirportService
 */
class AirportService {  
  constructor(ApiService) {
    'ngInject';
    this.api = ApiService;
    this.path = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';
  }

  /**
   * GET Airports information
   * 
   * @returns 
   * @memberof AirportService
   */
  getAirports() {
    return this.hasData() ? new Promise((resolve, reject) => resolve(this.data)) : this.api
      .get(this.path)
      .then((res) => this.data = this.transformAirports(res));
  }

  /**
   * It transforms data to a more suitable and efficient format
   * 
   * @param {any} data 
   * @returns 
   * @memberof AirportService
   */
  transformAirports(data) {
    let result = {};

    if (data && data.airports) {
      let airports = {};

      data.airports.forEach((ap) => {
        airports[ap.iataCode] = ap;
        airports[ap.iataCode].routes = data.routes[ap.iataCode];
      });

      data.airports = airports;
      result = data;
    }

    return result;
  }

  getData() {
    return this.data;
  }

  hasData() {
    return this.data && (Object.keys(this.data).length > 0);
  }
}

export default AirportService;
