

$(document).ready(function () {
  var modal = $('.modal-response'),
    modalBtn = $('[data-toggle=modal]'),
    closelBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.addClass('modal--visible');
  });
  closelBtn.on('click', function () {
    modal.removeClass('modal--visible');
    $('.modal__form').removeClass('modal__form--close');
    $('.modal-thanks').removeClass('modal--visible');
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
        maxlength: 15
      },
      userPhoneControl: "required",
      checkboxControl: "required",
    },

    // правило сообщения
    messages: {
      userNameControl: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 16 букв"
      },
      userPhoneControl: "Телефон обязателен",
      checkboxControl: "Согласитель с обработкой данных",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendControl.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          $('.modal-thanks').addClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
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
        maxlength: 15
      },
      userPhoneFooter: "required",
      userTextFooter: "required",
      checkboxFooter: "required",
    },

    // правило сообщения
    messages: {
      userNameFooter: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 16 букв"
      },
      userPhoneFooter: "Телефон обязателен",
      userTextFooter: "Введите свой вопрос",
      checkboxFooter: "Согласитель с обработкой данных",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendFooter.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          $('.modal-thanks').addClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // Валидация формы modal__form

  $('.modal__form').validate({

    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // сторочное правило
      userNameModal: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneModal: "required",
      // правило обьект
      userEmailModal: {
        required: true,
        email: true
      },
      checkboxModal: "required",
    },

    // правило сообщения
    messages: {
      userNameModal: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 16 букв"
      },
      userPhoneModal: "Телефон обязателен",
      userEmailModal: {
        required: "Обязательно введите email",
        email: "Введите в формате: name@domain.com"
      },
      checkboxModal: "Согласитель с обработкой данных",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendModal.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          $('.modal-thanks').addClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000)00-00-000', { placeholder: "+7 (000) 000-00-00" });



  // яндекс карта



  var loadMap = false;
  $(window).scroll(function () {
    if (($(this).scrollTop() > 1000) && !loadMap) {
      loadMap = true;
      loadScript('https://api-maps.yandex.ru/2.1/?load=package.map&apikey=e7ad7916-01c2-4bd5-89ae-1c906913ff83&lang=ru_RU&loadByRequire=1', function () {
        ymaps.load(initMap);
      });
    }
  });

  function loadScript(url, callback) {

    var script = document.createElement("script");

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function initMap() {
    var myMap = new ymaps.Map('map', {
      center: [55.786852, 49.142351],
      zoom: 17
    }, {
      autoFitToViewport: 'always',
      searchControlProvider: 'yandex#search'
    }),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наша компания',
        balloonContent: 'Вход свободный'
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
    // myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
  };

});

// ==============================================================

//   ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//       center: [55.810471, 37.645070],
//       zoom: 9
//     }, {
//       searchControlProvider: 'yandex#search'
//     }),

//       // Создаём макет содержимого.
//       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//       ),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//         hintContent: 'Наша компания',
//         balloonContent: 'вход свободный'
//       }, {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: 'default#image',
//         // Своё изображение иконки метки.
//         iconImageHref: 'img/marker.png',
//         // Размеры метки.
//         iconImageSize: [32, 32],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-5, -38]
//       });



//     myMap.geoObjects
//       .add(myPlacemark);

//   });

// });

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

// $('.modal-response__title').html('Оставьте заявку и наш менеджер свяжется с вами ');

// $('.modal__form').addClass('modal__form--close');
// $('.modal-response__title').html('Ваша заявка принята. Мы свяжемся с вами в течение 30 минут.')


// //---------------------------------------------------------------------------



