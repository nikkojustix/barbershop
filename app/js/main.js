$(function () {
  $videoBtn = $('.video__btn');
  $videoPlayer = $('.video__player');
  $video = $('.video');
  $servicesBtn = $('.services__btn');
  $menuBtn = $('.menu__btn');
  $menuBtnLine = $('.menu__btn-line');
  $menuList = $('.menu__list');

  $menuBtn.on('click', function () {
    $menuBtnLine.toggleClass('menu__btn-line--opened');
    $menuList.toggleClass('menu__list--opened');
    $('.wrapper').toggleClass('wrapper--disable');
  });

  $videoBtn.on('click', function () {
    if ($videoPlayer.get(0).paused) {
      $videoPlayer.get(0).play();
      $videoBtn.addClass('video__btn--paused');
    } else {
      $videoPlayer.get(0).pause();
      $videoBtn.removeClass('video__btn--paused');
    }
  });

  $video.on('mouseleave', function () {
    if ($videoBtn.hasClass('video__btn--paused')) {
      $videoBtn.css('opacity', '0');
    }
  });
  $video.on('mouseenter', function () {
    if ($videoBtn.hasClass('video__btn--paused')) {
      $videoBtn.css('opacity', '1');
    }
  });

  $('.works__slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $servicesBtn.on('click', function () {
    $(this).toggleClass('services__btn--opened')
      .prev().children('.services__item-title').toggleClass('services__item-title--golden')
      //.next().toggleClass('services__price-list--opened');
      .next().slideToggle();
    // $(this).prev().children('.services__item-title').toggleClass('services__item-title--golden');
    $(this).parent().toggleClass('services__item--opened');
  });

  $('.barbers__slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $('.feedback__slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

})