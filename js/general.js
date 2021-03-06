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




function Pay(t) {




    $(t).parent().find('.pay-section').toggle();


    $('#buyButton').hide();

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

    $('.close-lang').click(function () {
        $('.language-selector').hide();
    })

    $('.pay-section').hide();



    //Newsletter
    $('.newsletter-sent').hide();

    $('#insider').click(function () {
        $('.newsletter-sent').show();
        $('.insider').hide();
        $('.insider-heading').html("Thank you for your interest!");
    });

    $('.request').hide();

    $('#friend').click(function () {
        $('.request').show();
        $('.tellfriend').hide();
        $('.friend-heading').html("Your friend surely appreciates this!");
    });

});