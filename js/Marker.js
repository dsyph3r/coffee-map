(function() {
  var Marker;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Marker = (function() {
    function Marker(map, location) {
      this.map = map;
      this.location = location;
      this.handler = __bind(this.handler, this);
      this.markerOpts = {
        position: this.location.getGoogleLatLng(),
        map: this.map,
        title: "Marker"
      };
    }
    Marker.prototype.show = function() {
      this.marker = new google.maps.Marker(this.markerOpts);
      if (this.infowindow != null) {
        return google.maps.event.addListener(this.marker, 'click', this.handler);
      }
    };
    Marker.prototype.setImage = function(url, width, height) {
      var image;
      image = new google.maps.MarkerImage(url, new google.maps.Size(width, height));
      return this.markerOpts.icon = image;
    };
    Marker.prototype.setContent = function(content) {
      return this.infowindow = new google.maps.InfoWindow({
        content: content
      });
    };
    Marker.prototype.handler = function() {
      return this.infowindow.open(this.map, this.marker);
    };
    return Marker;
  })();
  window.Marker = Marker;
}).call(this);
