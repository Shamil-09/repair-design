var loadMap = false;
$(window).scroll(function () {
  if (($(this).scrollTop() > 1000) && !loadMap) {
    loadMap = true;
    loadScript('https://api-maps.yandex.ru/2.1/?load=package.map&apikey=e7ad7916-01c2-4bd5-89ae-1c906913ff83&lang=ru_RU&loadByRequire=1', function () {
      ymaps.load(initMap);
    });
  }
});

function initMap() {
  var myMap = new ymaps.Map('map', {
    center: [55.810471, 37.645070],
    zoom: 10
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
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark);
};