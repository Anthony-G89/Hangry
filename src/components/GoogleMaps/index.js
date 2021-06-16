import React, { useState } from "react";
import "./style.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import GeoCode from "react-geocode";
// import { stat } from "fs";


GeoCode.setApiKey("AIzaSyDI7YpCgc7cKTL4XZEo0jN5PzXDCXlHPGs")


// GeoCode.setApiKey ="AIzaSyDI7YpCgc7cKTL4XZEo0jN5PzXDCXlHPGs";

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


    // var getCity = (addressArray) => {
    //     let city = "";
    //     for (var i = 0; i < addressArray.length; i++) {
    //         if (addressArray[i].types[0] && "administrative_area_level_2" === addressArray[i].types[0]) {
    //             city = addressArray[i].long_name;
    //             return city;
    //         }
    //     }
    // };


    // var getArea = (addressArray) => {
    //     let area = "";
    //     for (var i = 0; i < addressArray.length; i++) {
    //         if (addressArray[i].types[0]) {
    //             for (var a = 0; a < addressArray.length; a++) {
    //                 if ("sublocality_level_1" === addressArray[i].types[a] || "locality" === addressArray[i].types[a]) {
    //                     area = addressArray[i].long_name;
    //                     return area
    //                 }
    //             }
    //         }
    //     }
    // };


    // var getState = (addressArray) => {
    //     let state = "";
    //     for (var i = 0; i < addressArray.length; i++) {
    //         for (var i = 0; i < addressArray.length; i++) {
    //             if (addressArray[i].types[0] && "adminstrative_area_level_1" === addressArray[i].types[0]) {
    //                 state = addressArray[i].long_name;
    //                 return state
    //             }
    //         }
    //     }

    // };


    var onMarkerDragEnd = (event) => {

        const newLat = event.latLng.lat();
        const newLng = event.latLng.lng();

        GeoCode.fromLatLng(newLat, newLng)
            .then(response => {

                // var address = response.results[0].formatted_address

                // const address = response.results[0].formatted_address,
                //     addressArray = response.results[0].address_compoments,
                //     city = getCity(addressArray),
                //     area = getArea(addressArray),
                //     state = getState(addressArray)
                //     // NOT WORKING!

                // googleLocation.SetState({
                //     address: (address) ? address : "",
                //     area: (area) ? area : "",
                //     city: (city) ? city : "",
                //     state: (state) ? state : "",
                //     markerPosition: {
                //         lat: newLat,
                //         lng: newLng
                //     },
                //     mapPosition: {
                //         lat: newLat,
                //         lng: newLng,

                //     }
                // })
                console.log(response.results[0].formatted_address);
            })

    };


    var MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: 28.6278, lng: -81.3631 }}
        >
            <Marker
                position={{ lat: 28.6278, lng: -81.3631 }}
                draggable={true}
                onDragEnd={onMarkerDragEnd}
            >
                <InfoWindow>
                    <div>
                        <h3>Info goes here</h3>
                    </div>
                </InfoWindow>
            </Marker>
        </GoogleMap>
    ));

    return (
        <div className={"col-lg-6 googleMaps"}>

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
