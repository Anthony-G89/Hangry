import React, { useState } from "react";
import "./style.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";



function GoogleLocator() {

    const [googleLocation, setgoogleLocation] = useState({
        address: "",
        city: "",
        area: "",
        state: "",
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0
        },
        markerPosition: {
            lat: 0,
            lng: 0
        }
    });



    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <Marker
                position={{ lat: -34.397, lng: 150.644 }}
            >
                <InfoWindow>
                    <div>
                        <h3>Info displays here!</h3>
                    </div>
                </InfoWindow>
            </Marker>
        </GoogleMap>
    ));

    return (
        <div className={"col-lg-6 googleMaps"}>
            {/* <div id="map"></div> */}
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDI7YpCgc7cKTL4XZEo0jN5PzXDCXlHPGs&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className={"googleMapData"} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
};

export default GoogleLocator;
