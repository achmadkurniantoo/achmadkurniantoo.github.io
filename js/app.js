$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    /* detect viewport change to toggle sidebar visibility */
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $('#side-menu').addClass('hide');
        }

        if ($(window).width() > 768) {
            $('#side-menu').removeClass('hide');
        }
    });

    /* automatically hide sidebar if viewport width <=768 */
    if ($(window).width() <= 768) {
        $('#side-menu').addClass('hide');
    }
});