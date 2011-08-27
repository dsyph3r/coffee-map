
class App
    constructor: ->
    
        @locations =
            cardiff:       new Location(51.481, -3.180)
            sydney:        new Location(-33.883, 151.216)
            barcelona:     new Location(41.387, 2.169)
            paris:         new Location(48.856, 2.352)
            lyon:          new Location(45.764, 4.835)
            copenhagen:    new Location(55.693, 12.583)
            newyork:       new Location(40.714, -74.006)
            london:        new Location(51.5, -0.116)
            cairo:         new Location(30.05, 31.25)
            mexicocity:    new Location(19.434, -99.138)
            delhi:         new Location(28.666, 77.216)
        
    run: ->
        @map = new Map("map_canvas", @locations.sydney);
            
        marker = @map.addMarker(@locations.sydney);
        marker.show();
        
        @map.addLine([@locations.cardiff,
                     @locations.paris,
                     @locations.lyon,
                     @locations.barcelona,
                     @locations.cairo,
                     @locations.delhi]);
        
        circle = @map.addCircle(@locations.london, 100000)
        circle.show();
        
        window.setTimeout(@showCardiff, 2000)
        
    showCardiff: =>
        @map.setCurrentLocation(@locations.cardiff);
        marker = @map.addMarker(@locations.cardiff);
        marker.setContent("Cardiff");
        marker.show();
    
window.App = App