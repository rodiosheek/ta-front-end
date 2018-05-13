import angular from 'angular';

import taCheckbox from './ta-checkbox/ta-checkbox.component';

const UTILS = angular.module('ta.utils', []);

UTILS.component('taCheckbox', taCheckbox);

UTILS.filter('timeOnly', function (_, moment) {
    'use strict';
    return function (date) {
        if (_.isDate(date)) {
            return moment(date).format('HH:mm');
        }

        if (!date || _.isUndefined(date) || date == '0000-00-00 00:00:00' || (typeof date == 'string' && date.trim() == '')) {
            return null;
        }

        return moment(date, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
    };
});

UTILS.filter('dateOnly', function (_, moment) {
    'use strict';
    return function (date) {
        if (_.isDate(date)){
            if (date.getTime()) {
                return moment(date).format('DD/MM/YYYY'); 
            }
            return null;
        }

        if (!date || _.isUndefined(date) || date == '0000-00-00 00:00:00' || (typeof date == 'string' && date.trim() == '')) {
            return null;
        }

        return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY');
    };
});

UTILS.filter('day', function (_, moment) {
    'use strict';
    return function (date) {
        if (_.isDate(date)){
            if (date.getTime()) {
                return moment(date).format('dddd'); 
            }
            return null;
        }

        if (!date || _.isUndefined(date) || date == '0000-00-00 00:00:00' || (typeof date == 'string' && date.trim() == '')) {
            return null;
        }
        moment.locale('he');
        return moment(date, 'YYYY-MM-DD HH:mm:ss').format('dddd');
    };
});