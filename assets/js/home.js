$(document).ready(function() {

    var times = 5000;
    // $('#im_' + currentImage).removeClass('active');
    $('#previous').on('click', function(){
        // $('#im_' + currentImage).stop().css("display","flex").fadeOut(1);
        $('#im_' + currentImage).removeClass('active');
        $('#im_' + currentImage).removeClass('active--right');
        decreaseImage();
        // $('#im_' + currentImage).stop().css("display","flex").fadeIn(1);
        $('#im_' + currentImage).addClass('active');
    });

    $('#next').on('click', function(){
        // $('#im_' + currentImage).css("display","flex").stop().fadeOut(1);
        $('#im_' + currentImage).removeClass('active');
        $('#im_' + currentImage).removeClass('active--right');
        increaseImage();
        // $('#im_' + currentImage).css("display","flex").stop().fadeIn(1);
        $('#im_' + currentImage).addClass('active');
        $('#im_' + currentImage).addClass('active--right');
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
        $('#previous').click();
    }, times); 

});
