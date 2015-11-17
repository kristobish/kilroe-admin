(function (app) {
    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../../views/admin.html',
                controller: 'TourCtrl'
            })

            .when('/', {
                templateUrl: '../../views/admin.html',
                controller: 'SongCatalogCtrl'
            })

            .when('/', {
                templateUrl: '../../views/admin.html',
                controller: 'PhotoCatalogCtrl'
            })

            .when('/', {
                templateUrl: '../../views/admin.html',
                controller: 'VideoCatalogCtrl'
            })

            .otherwise({redirectTo: '/'});
    }]);

})(angular.module('kilroe.admin'));
