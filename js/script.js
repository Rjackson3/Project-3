$(document).ready(function(){
  $('.slider').bxSlider();
});

$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});

$(document).ready(function(){
  $('#click1').click(function(){
      $('#aimg').toggleClass('aboutmeimg2');
  });
});

function initMap() {
  const chicago = { lat: 41.881832, lng: -87.623177 };
  const school = { lat: 41.87311896959141, lng: -87.62791057334427};
  const neighborhood = { lat: 41.97981509067583, lng: -87.69937281857815};
  const IIT = { lat: 41.83429528028157, lng: -87.62756505033413 }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: chicago,
  });
  
  const marker = new google.maps.Marker({
    position: IIT,
    map: map,
  });
  
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: neighborhood,
    map,
    icon: image,
  });
  
  new google.maps.Marker({
    position: school,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
    },
    draggable: false,
    map: map,
  });
}