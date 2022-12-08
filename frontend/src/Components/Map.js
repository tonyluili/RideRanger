import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../App.css"
const center = { lat: 48.8584, lng: 2.2945 };



function Map() {

  // const[centre, setCentre] = useState(); SET CENTRE BASED ON BUTTON
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) {
    return <h1>Loading...</h1>;
    
  }
  return (
    <div>
      <GoogleMap
        zoom={15}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </div>
  );
}

export default Map;
