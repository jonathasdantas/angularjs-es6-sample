/**
 * Cheap Flights Service
 * @class CheapFlightsService
 */
class CheapFlightsService {
  constructor(ApiService) {
    'ngInject';

    this.api = ApiService;
    this.path = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/';
    // https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/DUB/to/STN/2017-08-02/2017-09-02/250/unique/?limit=15&offset-0
  }

  /**
   * Get the Cheapest Flight according Departure Airport, Destination Airport, Start and End Date of Search
   * @param {any} from
   * @param {any} to
   * @param {any} start
   * @param {any} end
   * @param {number} [maxPrice=250]
   * @returns
   * @memberof CheapFlightsService
   */
  getFlights(from, to, start, end, maxPrice = 250) {
    return this.api
      .get(this.path + `${from}/to/${to}/${start}/${end}/${maxPrice}/unique/`)
      .then((res) => this.data = res);
  }

  getData() {
    return this.data;
  }

  hasData() {
    return this.data && (Object.keys(this.data).length > 0);
  }
}

export default CheapFlightsService;
