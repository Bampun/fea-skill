(function ($) {
  function latestProjectsSlider() {
    jQuery('.outside-beneficiaries-slider').slick({
      dots: false,
      infinite: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  function menuToggler() {
    $('.outside-menu-toggler .menu-toggler').click(function () {
      $('body').toggleClass('main-menu-open');
    });

    $('#primary-menu .menu-item').click(function () {
      $('.menu-item.menu-active').removeClass('menu-active');
      $(this).addClass('menu-active');
    });

    $('#mr-mobile-menu-primary-menu li').click(function () {
      $('li.active').removeClass('active');
      $(this).addClass('active');
    });

    $('#mr-close').click(function () {
      $('body').removeClass('main-menu-open');
    });

  }

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('body').addClass('body-scrolled');
      // adding masthead id  header tag
    } else {
      $('body').removeClass('body-scrolled');
    }
  });

  $(document).ready(function () {
    latestProjectsSlider();
    menuToggler();
  });
})(jQuery);
