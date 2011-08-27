
class Marker
    constructor: (@map, @location) ->
    
        @markerOpts =
            position:   @location.getGoogleLatLng()
            map:        @map
            title:      "Marker"
            
    show: () ->
    
        @marker = new google.maps.Marker(@markerOpts)
        
        if @infowindow?
            google.maps.event.addListener(@marker, 'click', @handler);
        
    setImage: (url, width, height) ->
        image = new google.maps.MarkerImage(url, new google.maps.Size(width, height))
        
        @markerOpts.icon = image
        
    setContent: (content) ->
        @infowindow = new google.maps.InfoWindow({
            content: content
        });
    
    handler: =>
        @infowindow.open(@map, @marker);
        
window.Marker = Marker
