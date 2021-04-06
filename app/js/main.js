$(function () {
  $headerBtn = $('.header__btn');
  $videoBtn  = $('.video__btn');
  $videoPlayer = $('.video__player');
  $video = $('.video');
  $servicesBtn = $('.services__btn');


  $headerBtn.magnificPopup({
    type: 'inline',
    midClick: true
  });

  $videoBtn.on('click', function() {
    if($videoPlayer.get(0).paused) {
      $videoPlayer.get(0).play();
      $videoBtn.addClass('video__btn--paused');
      setTimeout(function(){
        $videoBtn.css('opacity', '0');
      },2000);
      
    }
    else {
      $videoPlayer.get(0).pause();
      $videoBtn.removeClass('video__btn--paused');
    }
  });

  if($videoPlayer.get(0).played) {
    $video.on('mouseenter', function() {
      $videoBtn.css('opacity', '1');
    });
    $video.on('mouseleave', function() {
      $videoBtn.css('opacity', '0');
    });
  };

  $('.works__slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $servicesBtn.on('click', function(){
    $(this).toggleClass('services__btn--opened')
    .prev().children('.services__item-title').toggleClass('services__item-title--golden')
    .next().toggleClass('services__price-list--opened');
    // $(this).prev().children('.services__item-title').toggleClass('services__item-title--golden');
    $(this).parent().toggleClass('services__item--opened');
  });

  $('.barbers__slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

})