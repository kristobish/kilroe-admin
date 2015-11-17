(function (app) {
    'use strict';

    app.controller('TourCtrl', function ($scope, Ref, $firebaseArray) {

        function createGig (date, venue, location, time) {
            return {
                date: date,
                venue: venue,
                location: location,
                time: time
            };
        }

        $scope.newGig = createGig();

        $scope.gigs = $firebaseArray(Ref.child('gigs'));

        $scope.addGig = function (newGig) {

            //Converting date for Firebase
            newGig.date = newGig.date.getFullYear() + '/' + ('0' + (newGig.date.getMonth()+1)).slice(-2) + '/' + ('0' + newGig.date.getDate()).slice(-2);

            // Add gig to Firebase
            $scope.gigs.$add(newGig);

            $scope.newGig = createGig();

        };

        //Remove gig
        $scope.removeGig = function (gig) {
            $scope.gigs.$remove(gig);
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
            $scope.toggleText = $scope.toggle ? 'Past Shows' : 'Hide Past Shows';
        });

    });

})(angular.module('kilroe.admin'));
