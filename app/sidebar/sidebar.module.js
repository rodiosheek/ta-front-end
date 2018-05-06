import angular from 'angular';

import sidebarLeftComponent from './sidebar-left/sidebar-left.component';
import sidebarRightComponent from './sidebar-right/sidebar-right.component';

require('./sidebar.style.scss');

angular
    .module('ta.sidebar', [])
    .component('sidebarRight', sidebarRightComponent)
    .component('sidebarLeft', sidebarLeftComponent);