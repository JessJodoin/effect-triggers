var $showHide = $('.btn-show-hide');

$showHide.on('click', function () {
  var $box = $('.box')

  $box.toggleClass('box-show')
})
