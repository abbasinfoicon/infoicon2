// ==============BANNER CODE START===============

$('.bannerSlider').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    fade: true
});
// ==============BANNER CODE END===============

// ==============Testimonials CODE START===============
$('.testimonials').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    // draggable: false,
});
// ==============Testimonials CODE END===============

// ==============one_slider CODE START===============
$('.one_slider').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
  
        }
  
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
  
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }]
});

// ==============one_slider CODE END===============

// ==============client-carousel CODE START===============
$('.client-carousel').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: false,
    // draggable: false,
});
// ==============client-carousel CODE END===============

// ==============Testimonials CODE START===============
$('.contact-slider').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    // draggable: false,
});
// ==============Testimonials CODE END===============

// ================Count Code Start===================
$('.counter').countUp();
// ================Count Code END===================

$('#sidebar-menu').slicknav({
    // allowParentLinks: "true"
    closeOnClick: true,
});

$('.sidebar_li').click(function () {
    var slings = $(this).siblings().removeClass('slicknav_open');
    $(this).addClass('slicknav_ul').slings;
});

(function () {

    $(".panel").on("show.bs.collapse hide.bs.collapse", function (e) {
        if (e.type == 'show') {
            $(this).addClass('active').siblings().removeClass('active');

        } else {
            $(this).removeClass('active');
        }
    });

}).call(this);

$(".panel").click(function () {
    $(this).children('.panel-collapse').toggleClass('');
});