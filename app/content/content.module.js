import angular from 'angular';

import contentComponent from './content.component';
import contentService from './content.service';
import contentRouter from './content.router';

//Styles
require('./content.style.scss');

angular
  .module('ta.content', [])
  .component('content', contentComponent)
  .factory('contentService', contentService)
  .config(contentRouter);
  
