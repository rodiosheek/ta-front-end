import angular from 'angular';

import customersComponent from './customers.component';
import customersService from './customers.service';

//Styles
require('./customers.style.scss');

angular
  .module('ta.customers', [])
  .component('customers', customersComponent)
  .factory('customersService', customersService);
  
