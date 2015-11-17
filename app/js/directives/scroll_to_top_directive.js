(function (app) {
    'use strict';

    app.directive('scrollToTop', function () {
        return {
            scope: {},
            restrict: 'AE',
            template: '<div class="scroll-top-wrapper"><span class="scroll-top-inner"><i class="fa fa-2x fa-arrow-circle-up"></i></span></div>',
            link: function () {

                // hide or show button according to offset of window to page
                $(function () {
                    $(document).on('scroll', function () {
                        if ($(window).scrollTop() > 300) {
                            $('.scroll-top-wrapper').addClass('show');
                        } else {
                            $('.scroll-top-wrapper').removeClass('show');
                        }
                    });
                });

                // handle click event
                $(function () {
                    $(document).on('scroll', function () {
                        if ($(window).scrollTop() > 300) {
                            $('.scroll-top-wrapper').addClass('show');
                        } else {
                            $('.scroll-top-wrapper').removeClass('show');
                        }
                    });
                    $('.scroll-top-wrapper').on('click', scrollToTop);
                });

                function scrollToTop() {
                    var verticalOffset = typeof (verticalOffset) !== 'undefined' ? verticalOffset : 0;
                    var element = $('body');
                    var offset = element.offset();
                    var offsetTop = offset.top;
                    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
                }

            }
        };
    });

})(angular.module('kilroe.admin'));