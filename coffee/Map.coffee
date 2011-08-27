
class Map
    constructor: (@canvasId) ->
    
        mapOptions =
            zoom:       3
            center:     new google.maps.LatLng(-34.397, 150.644)
            mapTypeId:  google.maps.MapTypeId.ROADMAP
            
        map: new google.maps.Map(document.getElementById(@canvasId), mapOptions)

window.Map = Map


