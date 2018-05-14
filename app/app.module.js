import angular from 'angular';
import uirouter from 'angular-ui-router';

import contentModule from './content/content.module';
import flightsModule from './flights/flights.module';
import customersModule from './customers/customers.module';
import payDetailModule from './pay-details/pay-details.module';
import sidebarModule from './sidebar/sidebar.module';
import utils from './utils/utils.module';

import smartTables from 'angular-smart-table';

import datepicker from 'angularjs-datepicker';

import _ from 'underscore';

import moment from 'moment';

import LocalStorageModule from 'angular-local-storage';

require('./scss/main.scss');

require('./assets/styles/datapicker.scss');

angular.module('ta', [
  uirouter,
  'ta.content',
  'ta.flights',
  'ta.customers',
  'ta.payDetail',
  'ta.sidebar',
  'ta.utils',
  'smart-table',
  'LocalStorageModule'
])
  .constant('host', HOST)
  .constant('_', _) //underscore
  .constant('moment', moment)
  .config(localStorageServiceProvider =>
    localStorageServiceProvider.setPrefix('topAgent')
  );



