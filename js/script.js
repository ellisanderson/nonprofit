$(document).ready(function(){
  $('.accordion-trigger').click(function(){
    $(this).next('ul, .details').slideToggle();
  });
});

$(document).ready(function(){
  $('.top-button').click(function(){
    $('html, body').animate({scrollTop : 0},800);
		return false;
  });
});

$(document).ready(function(){
  $('.exhibits-carousel').slick({
    // centerMode: true,
    dots: true,
    arrows: false,
    appendArrows: $('.left'),
  });
});
$('.left').on('click', function() {
  $('.exhibits-carousel').slick('slickPrev');
});
$('.right').on('click', function() {
  $('.exhibits-carousel').slick('slickNext');
});

window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        header = document.querySelector("header"),
        nav = document.querySelector(".nav");
    if (distanceY > shrinkOn) {
        classie.add(header,"smaller");
        classie.add(nav,"smaller-nav");
    } else {
        if (classie.has(header,"smaller")) {
            classie.remove(header,"smaller");
            classie.remove(nav,"smaller-nav");
        }
    }
});
