(function (app) {
    'use strict';

    app.controller('NewsCtrl', function ($scope, Ref, $firebaseArray) {

        function createArticle (date, title, article) {
            return {
                date: date,
                article: article,
                title: title
            };
        }

        $scope.newArticle = createArticle();

        $scope.news = $firebaseArray(Ref.child('news'));


        $scope.addArticle = function (newArticle) {

            //Converting date for Firebase
            newArticle.date = newArticle.date.getFullYear() + '/' + ('0' + (newArticle.date.getMonth()+1)).slice(-2) + '/' + ('0' + newArticle.date.getDate()).slice(-2);

            // Add article to Firebase
            $scope.news.$add(newArticle);

            $scope.newArticle = createArticle();

        };

        //Remove article
        $scope.removeArticle = function (article) {
            $scope.news.$remove(article);
        };

        //for handling datepickers
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

    });

    app.controller('SocialMediaCtrl', function ($scope, Ref, $firebaseArray) {

        $scope.socialMediaIcons = $firebaseArray(Ref.child('socialMediaIcons'));

    });

})(angular.module('kilroe.admin'));
