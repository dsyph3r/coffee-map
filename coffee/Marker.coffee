
class Marker
    constructor: (@map, @location) ->

    show: (title) ->
        
        markerOpts =
            position:   @location.getGoogleLatLng()
            map:        @map
            title:      title

        @marker = new google.maps.Marker(markerOpts)
        
        google.maps.event.addListener(@marker, 'click', @handler);
        
    setContent: (content) ->
        @infowindow = new google.maps.InfoWindow({
            content: content
        });
    
    handler: =>
        @infowindow.open(@map, @marker);
        
window.Marker = Marker
