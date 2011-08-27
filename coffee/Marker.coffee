
class Marker
    constructor: (@map, @location) ->

    show: (title) ->
        
        markerOpts =
            position:   @location.getGoogleLatLng()
            map:        @map
            title:      title

        marker = new google.maps.Marker(markerOpts)

window.Marker = Marker
