

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closelBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closelBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});

// -------------------------------------------------------------------------
var $btnTop = $('.btn-top')
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 20) {
    $btnTop.fadeIn();
  } else {
    $btnTop.fadeOut();
  }
});

$btnTop.on('click', function () {
  $('html,body').animate({ scrollTop: 0 }, 1000)
})
//---------------------------------------------------------------------------