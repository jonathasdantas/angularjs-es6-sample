import { should } from 'chai';

import ServicesModule from '../services.module';
import AirportsService from './airports.service';

describe('Airport Service Tests', () => {
  let service;
  let airports;

  beforeEach(() => {
    angular.mock.module(ServicesModule);

    inject(($injector) => {
      service = $injector.get('AirportsService');
    });

    airports = service.getAirports();
  });

  it('/GET Airports should be a object', () => {
    airports.should.be.a('object');
  });

  it('/GET Airports should not be empty', () => {
    let keys = Object.keys(airports);
    keys.should.to.be.an('array').that.is.not.empty;
  });
});
