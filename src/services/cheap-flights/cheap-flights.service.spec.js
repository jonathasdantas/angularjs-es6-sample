import { should } from 'chai';

import ServicesModule from '../services.module';

describe('Cheap Flights Service Tests', () => {
  let service;
  let flights;

  beforeEach(() => {
    angular.mock.module(ServicesModule);

    inject(($injector) => {
      service = $injector.get('CheapFlightsService');
    });

    flights = service.getFlights('AAR', 'STN', '2017-09-01', '2017-10-01');
  });

  it('/GET Flights should be a object', () => {
    flights.should.be.a('object');
  });
});
