(function (app) {
    'use strict';

    app.directive('youtube', function ($sce) {
        return {
            restrict: 'A',
            scope: {
                youtubeId: '@youtube'
            },
            replace: true,
            template: '<div style="height:400px;"><iframe style="overflow: hidden; width: 600px; height: 400px" width="600px" height="400px" data-ng-src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function (scope) {
                scope.$watch('youtubeId', function (youtubeId) {
                    if (youtubeId) {
                        scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + youtubeId);
                    }
                });
            }
        };
    });

})(angular.module('kilroe.admin'));