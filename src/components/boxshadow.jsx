import $ from 'jquery';

export default function Scrolling() {

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".page-header").addClass("--with-shadow");
        } else {
            $(".page-header").removeClass("--with-shadow");
        }
    })

}