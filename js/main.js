(function () {
  'use strict';

  var s = Snap('#heartsvg');

  var heart = s.select('#heart');


  var animating = true;

  function animOn() {
    if (animating) {
      heart.animate({transform: 's1.1'}, 200, mina.linear(), animOut);
    }
  }

  function animOut() {
    heart.animate({transform: 'scale(1)'}, 250, mina.linear(), animOn);
  }

  heart.hover(function () {
    animating = true;
    animOn();
  }, function () {
    animating = false;
  });

}());

