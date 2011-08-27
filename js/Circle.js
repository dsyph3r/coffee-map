(function() {
  var Circle;
  Circle = (function() {
    function Circle(map, center, radius) {
      this.map = map;
      this.center = center;
      this.radius = radius;
      this.circleOpts = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: this.map,
        center: this.center.getGoogleLatLng(),
        radius: this.radius
      };
    }
    Circle.prototype.show = function() {
      var circle;
      return circle = new google.maps.Circle(this.circleOpts);
    };
    return Circle;
  })();
  window.Circle = Circle;
}).call(this);
