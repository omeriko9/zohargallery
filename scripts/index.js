
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

function prepFancyBoxOrder() {
    $('#iframe').contents().find(".display_paintings a").fancybox();
}

$(document).ready(function () {
    checkDOMChange();
    $('#menu a[id=order]').animate({ color: '#FF0000' }, 'slow');

    function animate() {
        $('#menu a[id=order]').animate({ color: '#FF4136' }, 1500, function () {
            $('#menu a[id=order]').animate({ color: '#FFDC00' }, 1500, function () {
                animate();
            });
        });
    }
    animate();
});

function checkDOMChange() {
    if ($('#facebook_span').children('span').first().length) {
        setTimeout(function () {
            $('#facebook_span').children('span').first().css('height', '30px').css('margin-right', '20px');
        }, 400);
        return;
    }
    // check for any new element being inserted here,
    // or a particular node being modified

    // call the function again after 100 milliseconds
    setTimeout(checkDOMChange, 100);
}
