$(document).ready(function() {
    $('#slideshow-container').addClass('slideshow');
  });
  

  var touchstartX = 0;
  var touchendX = 0;
  
  $('.slideshow').on('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
  });
  
  $('.slideshow').on('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    if (touchendX < touchstartX) {
      slideIndex++;
      $('.slideshow').css('transform', 'translateX(-' + slideIndex * 33.33 + '%)');
      if (slideIndex >= 2) {
        slideIndex = -1;
      }
    } else if (touchendX > touchstartX) {
      slideIndex--;
      $('.slideshow').css('transform', 'translateX(-' + slideIndex * 33.33 + '%)');
      if (slideIndex <= -1) {
        slideIndex = 2;
      }
    }
  });
  