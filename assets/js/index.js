$(document).ready(function() {
  // Enable smooth scroll with click-to-navigate
  $.localScroll({duration:500});

});

function myMap() {
    var mapOptions = {
      center: new google.maps.LatLng(47.669855, -122.353484),
      zoom: 15
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
