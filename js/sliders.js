$(document).ready(function () {
  $('.meta-label-slider').slick({
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    infinit: true,
    arrows: false,
    cssEasy: 'ease',
    centerPadding: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    asNavFor: ".wave-slider , .wave-content-slider",
    adptiveHeight: true,
  });
});


$('.wave-slider').slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
  speed: 1000,
  easing: 'ease',
  autoplay: false,
  infinite: true,
  autoplaySpeed: 3000,
  fade: true,
  asNavFor: ".wave-content-slider , .meta-label-slider",
});

$('.wave-content-slider').slick({
  dots: true,
  arrows: false,
  speed: 1000,
  easing: 'ease',
  autoplay: false,
  infinite: true,
  autoplaySpeed: 3000,
  fade: true,
  asNavFor: ".wave-slider , .meta-label-slider",

});


$('.team-slider').slick({
  arrows: true,
  slidesToShow: 3,
  speed: 1000,
  easing: 'ease',
  autoplay: false,
  infinite: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        fade: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
        fade: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: false,
      }
    }
  ]

});