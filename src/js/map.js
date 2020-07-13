let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.753969, 37.606673],
    zoom: 14,
    controls: []
  });

  const coords =  [
    [55.763183, 37.582547],
    [55.741035, 37.573998],
    [55.746456, 37.608084],
    [55.761756, 37.618330]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/icons/default/marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init); 