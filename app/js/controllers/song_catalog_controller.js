(function (app) {
    'use strict';

    app.controller('SongCatalogCtrl', function ($scope, Ref, $firebaseArray) {

        function createSong (song) {
            return {
                song: song
            };
        }

        $scope.newSong = createSong();

        $scope.catalog = $firebaseArray(Ref.child('catalog'));

        $scope.addSong = function (newSong) {

            // Add song to Firebase
            $scope.catalog.$add(newSong);

            $scope.newSong = createSong();

        };

        //Remove song
        $scope.removeSong = function (song) {
            $scope.catalog.$remove(song);
        };

    });
})(angular.module('kilroe.admin'));
