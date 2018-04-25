import angular from 'angular';
import uirouter from 'angular-ui-router';
import contentComponent from './content/content.module';

require('./scss/main.scss');
angular.module('ta', [
  uirouter,
  'ta.content'
]);
