import angular from 'angular';

import payDetailsComponent from './pay-details.component';
import payDetailsService from './pay-details.service';

import creditCardComponent from './credit-card/credit-card.component';

//Styles
require('./pay-details.style.scss');

angular
  .module('ta.payDetail', [])
  .component('payDetail', payDetailsComponent)
  .component('creditCard', creditCardComponent)
  .factory('payDetailsService', payDetailsService);
  
