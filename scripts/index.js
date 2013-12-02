
$('#iframe').load(calcHeight);

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.href);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Redirection

var page = getParameterByName("p")
if (page != "") {
    clearHeight(page);
}
else
    clearHeight('welcome.html');


function prepFancyBox() {
    $('#iframe').contents().find(".gallery a").fancybox();
}