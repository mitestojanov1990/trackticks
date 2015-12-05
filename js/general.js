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