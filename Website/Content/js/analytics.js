(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-40551820-2', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');


$(document).ready(function () {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', trackButtonClick);
    }
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', trackLinkClick);
    }
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', trackInputClick);
    }

    function trackButtonClick(e) {
        ga('send', 'event', 'button', 'click', e.target.id);
    };
    function trackLinkClick(e) {
        ga('send', 'event', 'link', 'click', e.target.id);
    };
    function trackInputClick(e) {
        ga('send', 'event', 'input', 'click', e.target.id);
    };
});