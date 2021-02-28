$(function () {
  $headerBtn = $('.header__btn');
  $videoBtn  = $('.video__btn');
  $videoPlayer = $('.video__player');
  $video = $('.video');


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
  }

})