
class Map
    constructor: (@canvasId, location) ->
    
        @currentLocation = location

        mapOptions =
            zoom:       3
            center:     @currentLocation.getGoogleLatLng()
            mapTypeId:  google.maps.MapTypeId.ROADMAP
            
        @map = new google.maps.Map(document.getElementById(@canvasId), mapOptions)
        
        @markers = []
        
    setCurrentLocation: (location) ->
        @currentLocation = location;
        @map.setCenter(@currentLocation.getGoogleLatLng())
    
    getCurrentLocation: ->
        @currentLocation
        
    addMarker: (location) ->
        marker = new Marker(@map, location)
        @markers.push(marker)
        return marker
        
    addLine: (locations) ->
        line = new Line(@map, locations)
        
    addCircle: (location, radius) ->
        circle = new Circle(@map, location, radius)
        return circle
        
window.Map = Map


