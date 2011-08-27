(function() {
  var Location;
  Location = (function() {
    function Location(lat, lng) {
      this.lat = lat;
      this.lng = lng;
    }
    Location.prototype.setLatLng = function(lat, lng) {
      this.lat = lat;
      this.lng = lng;
    };
    Location.prototype.getLatLng = function() {
      return {
        lat: this.lat,
        lng: this.lng
      };
    };
    Location.prototype.getLat = function() {
      return this.lat;
    };
    Location.prototype.getLng = function() {
      return this.lng;
    };
    Location.prototype.getGoogleLatLng = function() {
      return new google.maps.LatLng(this.lat, this.lng);
    };
    return Location;
  })();
  window.Location = Location;
}).call(this);
