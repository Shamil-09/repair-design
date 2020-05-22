

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

  new WOW().init();

  // Валидация формы control__form

  $('.control__form').validate({

    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // сторочное правило
      userNameControl: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhoneControl: "required",
    },

    // правило сообщения
    messages: {
      userNameControl: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 16 букв",
      },
      userPhoneControl: "Телефон обязателен",
    }
  });

  // Валидация формы footer__form

  $('.footer__form').validate({

    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // сторочное правило
      userNameFooter: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhoneFooter: "required",
      userEmailFooter: "required",
    },

    // правило сообщения
    messages: {
      userNameFooter: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 16 букв",
      },
      userPhoneFooter: "Телефон обязателен",
      userEmailFooter: "Введите свой вопрос",
    }
  });

  // Валидация формы modal__form

  $('.modal__form').validate({

    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // сторочное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      // правило обьект
      userEmail: {
        required: true,
        email: true
      }
    },

    // правило сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 16 букв",
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно введите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000)00-00-000', { placeholder: "+7 (000) 000-00-00" });

  // яндекс карта

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.810471, 37.645070],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наша компания',
        balloonContent: 'вход свободный'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/marker.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });



    myMap.geoObjects
      .add(myPlacemark);

  });

});

// -------------------------------------------------------------------------
// var $btnTop = $('.btn-top')
// $(window).on('scroll', function () {
//   if ($(window).scrollTop() >= 20) {
//     $btnTop.fadeIn();
//   } else {
//     $btnTop.fadeOut();
//   }
// });

// $btnTop.on('click', function () {
//   $('html,body').animate({ scrollTop: 0 }, 1000)
// })
// //---------------------------------------------------------------------------



