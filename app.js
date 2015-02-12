(function () {
    var openUrl = window.location.search;
    try {
        openUrl = openUrl.substring(1, openUrl.length);
    } catch (e) {}
    var isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod'),
        isAndroid = navigator.userAgent.match('Android'),
        isDesktop = !isiOS && !isAndroid;
    if (isiOS) {
        setTimeout(function () {
            window.location = "itms-apps://itunes.apple.com/app/[name]/[id]?mt=8";
        }, 25);
        window.location = "[scheme]://[host]?url=" + openUrl;
    } else if (isAndroid) {
        window.location = "intent://[host]/" + "url=" + openUrl + "#Intent;scheme=[scheme];package=[package_name];end";
    } else {
        window.location = openUrl;
    }
})();
