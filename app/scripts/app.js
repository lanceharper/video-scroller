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

    meContainer.replaceWith('<img src="images/echo-hereweare.jpg"/>');

    $(this)
      .find('img')
      .replaceWith('<video id="activePlayer" src="images/echo-hereweare.mp4" width="320" height="240"></video>')

    player = new MediaElementPlayer('#activePlayer', {
      success: function(mediaElement, domObject) {
        mediaElement.play();

        setTimeout(function() {
          mediaElement.setCurrentTime(0);
        }, 10000);
      }
    });
  });

  return;
});
