/**
 * Generic Json Api Service Helper Methods
 * 
 * @class ApiService
 */
class ApiService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  /**
   * Generic Error Handler Method
   * 
   * @param {any} error 
   * @memberof ApiService
   */
  handleError(error) {
    console.error(`An error occurred with your request to ${error.config.url}.`);
  }

  /**
   * Default Headers to a Json Api
   * 
   * @returns 
   * @memberof ApiService
   */
  setHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return headers;
  }

  /**
   * Makes a GET Request to the specified URL
   * 
   * @param {any} path 
   * @param {any} [params={}] 
   * @returns 
   * @memberof ApiService
   */
  get(path, params = {}) {
    return this.$http
      .get(path, {
        headers: this.setHeaders(),
        params: params
      })
      .then(res => res.data)
      .catch(this.handleError);
  }

  /**
   * Not Implemented
   * 
   * @memberof ApiService
   */
  post() {}

  /**
   * Not Implemented
   * 
   * @memberof ApiService
   */
  put() {}

  /**
   * Not Implemented
   * 
   * @memberof ApiService
   */
  delete() {}
}

export default ApiService;
