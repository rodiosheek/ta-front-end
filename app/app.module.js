import angular from 'angular';
import uirouter from 'angular-ui-router';

import contentModule from './content/content.module';
import flightsModule from './flights/flights.module';

require('./scss/main.scss');
angular.module('ta', [
  uirouter,
  'ta.content',
  'ta.flights'
]);
