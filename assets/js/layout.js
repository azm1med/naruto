window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var nav = document.getElementById('nav');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}