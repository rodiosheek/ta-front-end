import angular from 'angular';

import flightsComponent from './flights.component';
import flightsService from './flights.service';

//Styles
require('./flights.style.scss');

angular
  .module('ta.flights', [])
  .component('flights', flightsComponent)
  .factory('flightsService', flightsService);
  
