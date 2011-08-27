
class Location
    constructor: (@lat, @lng) ->
        
    setLatLng: (@lat, @lng) ->
    
    getLatLng: () ->
        { @lat, @lng }
    
    getLat: () ->
        @lat
        
    getLng: () ->
        @lng
        
    getGoogleLatLng: () ->
        new google.maps.LatLng(@lat, @lng)
        
window.Location = Location