window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var nav = document.getElementById('nav');
    var body = document.getElementById('root__body');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('active');
        body.style.marginTop = '90px';
    } else {
        nav.classList.remove('active');
        body.style.marginTop = '130px';
    }
}