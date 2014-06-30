/*global define */
define(['jquery','waypoints','mejs'], function ($) {
  'use strict';
  $('.hero-unit').waypoint(function(direction) {

    if ($(this).find('#activePlayer').length > 0) {
      return;
    }

    $('#activePlayer').remove();
    var player = null;

    if (direction === 'down') {

      var meContainer =
        $(this)
          .prev()
          .find('.mejs-container');
    } else {

      var meContainer =
        $(this)
          .next()
          .find('.mejs-container');
    }

    meContainer.prev('img').show();
    meContainer.remove();
    var img = $(this).find('img').hide();

    img.after('<video id="activePlayer" src="' + img.data('video-src') + '" width="800" height="450"></video>')

    player = new MediaElementPlayer('#activePlayer', {
      success: function(mediaElement, domObject) {
        mediaElement.play();

        setTimeout(function() {
          img.show();
          $('.mejs-container').remove();
        }, 8000);
      }
    });
  });

  return;
});
