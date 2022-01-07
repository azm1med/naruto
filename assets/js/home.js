$(document).ready(function() {

    $('#home__news__prev').on('click', function(){
        $('#home__news__' + currentImage).removeClass('active');
        decreaseImage();
        $('#home__news__' + currentImage).addClass('active');
    });

    $('#home__news__next').on('click', function(){
        $('#home__news__' + currentImage).removeClass('active');
        increaseImage();
        $('#home__news__' + currentImage).addClass('active');
    });

    var currentImage = 1;
    var totalImages = 3;

    function increaseImage() {
        ++currentImage;
        if(currentImage > totalImages) {
            currentImage = 1;
        }
    }

    function decreaseImage() {
        --currentImage;
        if(currentImage < 1) {
            currentImage = totalImages;
        }
    }

    window.setInterval(function() {
        $('#home__news__prev').click();
    }, 5000); 

});
