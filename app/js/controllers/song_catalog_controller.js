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

        //Expand-Collapse - Keep closed initially
        $scope.isCollapsed = true;

        //Toggle past shows button
        $scope.toggle = true;
        $scope.$watch('toggle', function(){
            $scope.toggleSongs = $scope.toggle ? 'Show Songs' : 'Hide Songs';
        });

    });
})(angular.module('kilroe.admin'));
