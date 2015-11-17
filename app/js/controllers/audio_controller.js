(function (app) {
    'use strict';

    app.controller('AudioCtrl', function ($scope, Ref, $firebaseArray) {

        $scope.songs = $firebaseArray(Ref.child('songs'));

    });

})(angular.module('kilroe.admin'));
