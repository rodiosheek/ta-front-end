import angular from 'angular';

import contentComponent from './content.component';
import contentService from './content.service';
import contentRouter from './content.router';

import progressBarComponent from './progress-bar/progress-bar.component';

//Styles
require('./content.style.scss');

angular
  .module('ta.content', [])
  .component('content', contentComponent)
  .component('progressBar', progressBarComponent)
  .factory('contentService', contentService)
  .config(contentRouter);
  
