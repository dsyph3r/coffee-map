(function() {
  var App;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  App = (function() {
    function App() {
      this.showCardiff = __bind(this.showCardiff, this);      this.locations = {
        cardiff: new Location(51.481, -3.180),
        sydney: new Location(-33.883, 151.216),
        barcelona: new Location(41.387, 2.169),
        paris: new Location(48.856, 2.352),
        lyon: new Location(45.764, 4.835),
        copenhagen: new Location(55.693, 12.583),
        newyork: new Location(40.714, -74.006),
        london: new Location(51.5, -0.116),
        cairo: new Location(30.05, 31.25),
        mexicocity: new Location(19.434, -99.138),
        delhi: new Location(28.666, 77.216)
      };
    }
    App.prototype.run = function() {
      var circle, marker;
      this.map = new Map("map_canvas", this.locations.sydney);
      marker = this.map.addMarker(this.locations.sydney);
      marker.show();
      this.map.addLine([this.locations.cardiff, this.locations.paris, this.locations.lyon, this.locations.barcelona, this.locations.cairo, this.locations.delhi]);
      circle = this.map.addCircle(this.locations.london, 100000);
      circle.show();
      return window.setTimeout(this.showCardiff, 2000);
    };
    App.prototype.showCardiff = function() {
      var marker;
      this.map.setCurrentLocation(this.locations.cardiff);
      marker = this.map.addMarker(this.locations.cardiff);
      marker.setImage('/images/wales.png', 16, 11);
      marker.setContent("Cardiff");
      return marker.show();
    };
    return App;
  })();
  window.App = App;
}).call(this);
