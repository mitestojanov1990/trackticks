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

var curLang = 1;

/*$(document).ready(function () {

});*/

function ChangeLanguage() {
    $('#changeLanguage').removeClass('hidden');
}

function UpdateLanguagePanel() {
    if (curLang == 1) {
        $('.lang_text').text('English');
    } else {
        $('.lang_text').text('German');
    }
}

