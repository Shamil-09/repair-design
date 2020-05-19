

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



  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      modal.toggleClass('modal');
    }
  });




  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 30 + bullets.width() + 30)
  bullets.css('left', prev.width() + 30)

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




