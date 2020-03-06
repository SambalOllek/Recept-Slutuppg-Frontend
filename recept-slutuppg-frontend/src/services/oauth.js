document.body.onload= init;
function init() {
    if($.url().param("code") !== undefined) {
        var url = "http://8080/oauth_backend/webresources/token?code="
        + $.url().param("code");
        $.get(url, function (data) {
            localStorage.setItem("token", data);
        })
    }
}