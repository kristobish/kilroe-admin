(function (app) {
    'use strict';

    app.controller('BandCtrl', function ($scope, Ref, $firebaseArray) {

        $scope.band = $firebaseArray(Ref.child('band'));

    });
})(angular.module('kilroe.admin'));
