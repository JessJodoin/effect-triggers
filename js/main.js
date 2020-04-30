var $showHide = $('.btn-show-hide');
var $inOut = $('.btn-move');
var $bounce = $('.btn-bounce');
var $circle = $('.circle');

$showHide.on('click', function () {
  var $box = $('.box');

  $box.toggleClass('box-show');
});

$inOut.on('click', function () {
  var $diamond = $('.diamond');

  $diamond.toggleClass('diamond-in');
});

$bounce.on('click', function () {
  $circle.addClass('circle-mover');
});

$circle.on('webkitAnimationEnd animationend', function () {
  $circle.removeClass('circle-mover');
});
