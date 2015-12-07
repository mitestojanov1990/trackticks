function effectiveDeviceWidth() {
    var deviceWidth = window.screen.width;

    if (deviceWidth > 1364)
        return 1364;

    return deviceWidth;
}

function effectiveDeviceHeight() {
    var deviceHeight = window.screen.height;

    if (deviceHeight > 853)
        return 853;

    return deviceHeight;
}

function ToggleReadMore(t) {
    $(t).parent().find('p').toggle();

    if ($(t).text() == "Read More") {
        $(t).text('Close');
    } else {
        $(t).text('Read More');
    }
}

function NavigationToggle(t) {
    $(t).children('.navbar_image_wrapper').toggleClass('hidden');

    $('.list-inline.mobile').toggleClass('mobile_visible');
}

$(document).ready(function () {

    $('#check').hide();
    $('#buy_button').click(function () {
        $('#check').toggle();
    });
});