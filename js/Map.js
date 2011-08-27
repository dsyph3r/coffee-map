(function() {
  var Map;
  Map = (function() {
    function Map(canvasId, location) {
      var mapOptions;
      this.canvasId = canvasId;
      this.currentLocation = location;
      mapOptions = {
        zoom: 3,
        center: this.currentLocation.getGoogleLatLng(),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(document.getElementById(this.canvasId), mapOptions);
      this.markers = [];
    }
    Map.prototype.setCurrentLocation = function(location) {
      this.currentLocation = location;
      return this.map.setCenter(this.currentLocation.getGoogleLatLng());
    };
    Map.prototype.getCurrentLocation = function() {
      return this.currentLocation;
    };
    Map.prototype.addMarker = function(location) {
      var marker;
      marker = new Marker(this.map, location);
      this.markers.push(marker);
      return marker;
    };
    Map.prototype.addLine = function(locations) {
      var line;
      return line = new Line(this.map, locations);
    };
    Map.prototype.addCircle = function(location, radius) {
      var circle;
      circle = new Circle(this.map, location, radius);
      return circle;
    };
    return Map;
  })();
  window.Map = Map;
}).call(this);
