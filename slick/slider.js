$(document).ready(function () {
  $(".about__teams").slick({
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
