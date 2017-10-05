import React from 'react';
import ReactDOM from 'react-dom';

class GoogleMap extends ReactComponent{
    constructor(props){
        super(props);
    }

    function initMap() {
                    var uluru = {lat: -25.363, lng: 131.044};
                    var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: uluru
                    });
                    var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                    });
                }

    render() {
        return(
            <div className='container'>
                <h3>My Google Maps Demo</h3>
                <div id="map"></div>
                <script>

                </script>
                <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
                </script>
            </div>
        );
    }
}

export default GoogleMap;