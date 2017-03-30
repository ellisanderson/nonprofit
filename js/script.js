$(document).ready(function(){
  $('.accordion-trigger').click(function(){
    $(this).next('ul').slideToggle();
  });
});

$(document).ready(function(){
  $('.top-button').click(function(){
    $('html, body').animate({scrollTop : 0},800);
		return false;
  });
});
