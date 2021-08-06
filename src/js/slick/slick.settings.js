$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('#arrows__left'),
        nextArrow: $('#arrows__right'),
    });

    $('.rec_slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('#rec__arrows_left'),
        nextArrow: $('#rec__arrows_right'),
    });
});