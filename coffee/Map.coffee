
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
    
    getCurrentLocation: () ->
        @currentLocation
        
    addMarker: (location) ->
        marker = new Marker(@map, location)
        @markers.push(marker)
        return marker
        
window.Map = Map


