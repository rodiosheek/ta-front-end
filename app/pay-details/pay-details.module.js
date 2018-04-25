import angular from 'angular';

import payDetailsComponent from './pay-details.component';
import payDetailsService from './pay-details.service';

//Styles
require('./pay-details.style.scss');

angular
  .module('ta.payDetail', [])
  .component('payDetail', payDetailsComponent)
  .factory('payDetailsService', payDetailsService);
  
