import angular from 'angular';

import customersComponent from './customers.component';
import customersService from './customers.service';

import customerFormComponent from './customer-form/customer-form.component';

//Styles
require('./customers.style.scss');

angular
  .module('ta.customers', [])
  .component('customers', customersComponent)
  .component('customerForm', customerFormComponent)
  .factory('customersService', customersService);
  
