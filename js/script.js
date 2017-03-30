$(document).ready(function(){
  $('.accordion-trigger').click(function(){
    $(this).next('ul').slideToggle();
  });
});
