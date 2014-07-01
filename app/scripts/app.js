/*global define */
define(['jquery','waypoints','mejs'], function ($) {
  'use strict';

  var player = null;
  var timeoutId = null;

  $('.video-unit').waypoint(function(direction) {

    $('.video-main').addClass('sidebar-fixed');
    if ($(this).find('#activePlayer').length > 0) {
      return;
    }


    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    $('#activePlayer').remove();

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
        //
        // timeoutId = setTimeout(function() {
        //   img.show();
        //   $('.mejs-container').remove();
        // }, 8000);
      }
    });
  }, {offset: 100});

  return;
});
