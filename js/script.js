$(document).ready(function(){
  $('.hamburger-trigger').click(function(){
    $('.hamburger-menu').slideToggle();
  });
});



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
$('#au').click(function() {
  $('html, body').animate({
          scrollTop: $('.about-me').offset().top
        }, 1000);
})
$('#gr').click(function() {
  $('html, body').animate({
          scrollTop: $('#grants').offset().top
        }, 1000);
})
$('#ex').click(function() {
  $('html, body').animate({
          scrollTop: $('.exhibits').offset().top
        }, 1000);
})
$('#cu').click(function() {
  $('html, body').animate({
          scrollTop: $('footer').offset().top
        }, 1000);
})
$('#jo').click(function() {
  $('html, body').animate({
          scrollTop: $('#jobs').offset().top
        }, 1000);
})
$('#ll').click(function() {
  $('html, body').animate({
          scrollTop: $('#links').offset().top
        }, 1000);
})

var d = true;
$(document).ready(function(){
  if($(window).width() < 620) {
    $('#nav').slideToggle("fast");
    d = false;
  }
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

$('.hamburger').click(function() {
  $('#nav').slideToggle("fast");
  if(d) {
    d = false;
  } else {
    d = true;
  }
});

$(window).resize(function() {
  if($(window).width() < 620 && d == true) {
    $('#nav').slideToggle("fast");
    d = false;
  }
  if($(window).width() > 620) {
    if(d == false) {
      $('#nav').slideToggle("fast");
      d = true;
    }
  }
})



// window.addEventListener('scroll', function(e){
//     var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//         shrinkOn = 300,
//         header = document.querySelector("header"),
//         nav = document.querySelector(".nav");
//     if (distanceY > shrinkOn) {
//         classie.add(header,"smaller");
//         classie.add(nav,"smaller-nav");
//     } else {
//         if (classie.has(header,"smaller")) {
//             classie.remove(header,"smaller");
//             classie.remove(nav,"smaller-nav");
//         }
//     }
//
// });

// $(document).ready(function(){
//   $('#au').click(function(){
//     $('.header-top').toggle();
//   });
// });

$(document).ready(function(){
  if ($(window).scrollTop() > 300) {
    console.log("hide me");
      $('.header-top').hide();
  } else {
      $('.header-top').show();
  }
});
