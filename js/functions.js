$(document).ready(function() {

  var winHeight = window.innerHeight ? window.innerHeight : $(window).height();

  $('header').css({height: winHeight});

  $(window).resize(function() {

    var winHeight = window.innerHeight ? window.innerHeight : $(window).height();

    $('header').css({height: winHeight});

  });

  var navOffset = $(".navbar").offset().top;

  $(".navbar").wrap('<div class="navbar-placeholder"></div>');

  $(".navbar-placeholder").height($(".navbar").outerHeight());

  $(window).scroll(function() {

    var scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {

      $(".navbar").addClass("navbar-fixed-top");

    } else {

      $(".navbar").removeClass("navbar-fixed-top");

    }

  });

  $(".header-scroll-button").click(function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop: $(".navbar").offset().top}, 'slow');
  });

  $(".navbar-brand").click(function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop: $('header').offset().top}, 'slow');
  });

  $(".navbar li a").click(function(e) {
    e.preventDefault();

    var target = $( 'section' + $(this).attr('href') );

    $('html,body').animate({
      scrollTop: target.offset().top - $(".navbar-placeholder").height()
    }, 'slow');
  });

  $('.gallery').slick({
    infinite: false,
    dots: false,
    lazyLoad: 'ondemand'
  });

  $('#bridesmaids').slick({
    slidesToShow: 5,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        infinite: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }
  ]
  });

  $('#groomsmen').slick({
    slidesToShow: 5,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        infinite: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }
  ]
  });

  $('.close').click( function (){
    $('.photos-text').fadeOut('normal');
  });

});
