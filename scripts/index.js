
function calcHeight() {

    // var the_height=document.getElementById('iframe').contentWindow.document.body.scrollHeight;
    var the_height;
    var F = document.getElementById("iframe");


    if (F.contentDocument) {
        the_height = F.contentDocument.documentElement.scrollHeight;
    }
    else {
        the_height = F.contentWindow.document.body.scrollHeight;
    }

    $('#iframe').hide();
    $('#iframe')[0].style.height = the_height + "px";
    $('#iframe').fadeIn(400);
    $('#loaderWarp', window.parent.document).hide();
    $('#footer', window.parent.document).show();

    if (the_height == '0') {
        calcHeight();
    }
}

$('#iframe').load(calcHeight);

function clearHeight(p) {
    if (!p) p = "welcome.html";
    $('#loaderWarp', window.parent.document).show();
    $('#iframe', window.parent.document).attr("src", p);
    $('#iframe', window.parent.document).hide();

    $('body', window.parent.document).scrollTop(0);
    window.parent.document.getElementById('iframe').style.height = "0";

    $('#footer', window.parent.document).hide();
}

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