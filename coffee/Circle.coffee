
class Circle
    constructor: (@map, @center, @radius) ->
        
        @circleOpts = 
            strokeColor:    "#FF0000"
            strokeOpacity:  0.8
            strokeWeight:   2
            fillColor:      "#FF0000"
            fillOpacity:    0.35
            map:            @map
            center:         @center.getGoogleLatLng()
            radius:         @radius
            
    show: ->
        circle = new google.maps.Circle(@circleOpts);
    
window.Circle = Circle