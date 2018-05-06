import angular from 'angular';

import flightsComponent from './flights.component';
import flightsService from './flights.service';

import projectsComponent from './projects/projects.component';
import projectsService from './projects/projects.service';

//Styles
require('./flights.style.scss');

angular
  .module('ta.flights', [])
  .component('flights', flightsComponent)
  .component('projects', projectsComponent)
  .factory('flightsService', flightsService)
  .factory('projectsService', projectsService);
  
