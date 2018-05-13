import angular from 'angular';

import flightsComponent from './flights.component';
import flightsService from './flights.service';

import projectsComponent from './projects/projects.component';
import projectsService from './projects/projects.service';
import flightTableComponent from './flights-table/flights-table.component';
import flightFilterCompoenent from './flight-filter/flight-filter.component';

import serviceTableComponent from './service-table/service-table.component';

//Styles
require('./flights.style.scss');

angular
  .module('ta.flights', [])
  .component('flights', flightsComponent)
  .component('projects', projectsComponent)
  .component('flightsTable', flightTableComponent)
  .component('flightFilter', flightFilterCompoenent)
  .component('serviceTable', serviceTableComponent)
  .factory('flightsService', flightsService)
  .factory('projectsService', projectsService);
  
