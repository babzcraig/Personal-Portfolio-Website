
function makeSticky(){
  var myWindow = $(window),
      myHeader = $('.nav');

  myWindow.scroll(function(){
    if(myWindow.scrollTop() == 0) {
      myHeader.removeClass("sticky-nav");
      $(".tagline").css('padding-top', '120px');


    } else {
      myHeader.addClass("sticky-nav");
      $(".tagline").css('padding-top', '200px');
    }
  });
}

$(document).ready(function() {

  makeSticky();

  $('a.nav-link').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

  $(window).scroll(function() {

    $('.hideme').each(function(i) {

      var bottomOfObject = $(this).offset().top + $(this).outerHeight();
      var bottomOfWindow = $(window).scrollTop() +$(window).height();

      if (bottomOfWindow > bottomOfObject) {
        $(this).animate({'opacity':'1'}, 800);
      }

    })

  });







});
