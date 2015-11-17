(function (app) {
    'use strict';

    app.filter('dateFormatGig', function ($filter) {
        return function (input) {
            if (input === null) {
                return '';
            }

            return $filter('date')(new Date(input), 'EEE M.d.yyyy');
        };
    });

    app.filter('dateFormatGigPast', function ($filter) {
        return function (input) {
            if (input === null) {
                return '';
            }

            return $filter('date')(new Date(input), 'M.d.yy');
        };
    });

})(angular.module('kilroe.admin'));
