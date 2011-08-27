
class Line
    constructor: (@map, @locations) ->
    
        lineOpts = 
            strokeColor:    '#000000'
            strokeOpacity:  1.0
            strokeWeight:   3
        
        @line = new google.maps.Polyline(lineOpts);
        @line.setMap(@map);
        
        @addLocation location for location in @locations
        
    addLocation: (location) ->
        @line.getPath().push(location.getGoogleLatLng())
        
window.Line = Line
        