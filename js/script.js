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

function initMap() {
  const chicago = { lat: 41.881832, lng: -87.623177 };
  const devry = { lat: 41.86423, lng: -87.66410};
  const neighborhood = { lat: 41.73004, lng: -87.56937};
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
