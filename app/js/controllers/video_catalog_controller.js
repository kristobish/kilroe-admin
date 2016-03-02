(function (app) {
    'use strict';

    app.controller('VideoCatalogCtrl', function ($scope, Ref, $firebaseArray) {

        function createVideo (date, youtubeId, description, venue) {
            return {
                date: date,
                description: description,
                venue: venue,
                youtubeId: youtubeId
            };
        }

        $scope.newVideo = createVideo();

        $scope.videos = $firebaseArray(Ref.child('videos'));

        // provide a method for adding a video
        $scope.addVideo = function (newVideo) {

            //Converting date for Firebase
            newVideo.date = newVideo.date.getFullYear() + '/' + ('0' + (newVideo.date.getMonth()+1)).slice(-2) + '/' + ('0' + newVideo.date.getDate()).slice(-2);

            // Add video to Firebase
            $scope.videos.$add(newVideo);

            $scope.newVideo = createVideo();

        };

        //Remove video
        $scope.removeVideo = function (video) {
            $scope.videos.$remove(video);
        };

        //for handling datepickers
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        //Expand-Collapse - Keep closed initially
        $scope.isCollapsed = true;

        //Toggle past shows button
        $scope.toggle = true;
        $scope.$watch('toggle', function(){
            $scope.toggleVideo = $scope.toggle ? 'Show Video' : 'Hide Video';
        });

    });

})(angular.module('kilroe.admin'));
