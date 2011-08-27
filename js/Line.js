(function() {
  var Line;
  Line = (function() {
    function Line(map, locations) {
      var lineOpts, location, _i, _len, _ref;
      this.map = map;
      this.locations = locations;
      lineOpts = {
        strokeColor: '#000000',
        strokeOpacity: 1.0,
        strokeWeight: 3
      };
      this.line = new google.maps.Polyline(lineOpts);
      this.line.setMap(this.map);
      _ref = this.locations;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        location = _ref[_i];
        this.addLocation(location);
      }
    }
    Line.prototype.addLocation = function(location) {
      return this.line.getPath().push(location.getGoogleLatLng());
    };
    return Line;
  })();
  window.Line = Line;
}).call(this);
