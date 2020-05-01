var $showHide = $('.btn-show-hide');
var $inOut = $('.btn-move');
var $collapseExpand = $('.btn-collapse-expand');
var $bounce = $('.btn-bounce');
var $circle = $('.circle');
var $append = $('.btn-append');

$showHide.on('click', function () {
  var $box = $('.box');

  $box.toggleClass('box-show');
});

$inOut.on('click', function () {
  var $diamond = $('.diamond');

  $diamond.toggleClass('diamond-in');
});

$collapseExpand.on('click', function () {
  var $panel = $('.panel');

  $panel.toggleClass('panel-collapse');

});

$bounce.on('click', function () {
  $circle.addClass('circle-mover');
});

$circle.on('webkitAnimationEnd animationend', function () {
  $circle.removeClass('circle-mover');
});

$append.on('click', function () {
  var $li = $('<li>New List Item</li>');

  $li.addClass('list-item');

  $('.list').prepend($li);
});
