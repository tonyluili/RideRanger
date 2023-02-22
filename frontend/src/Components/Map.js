import React from "react";
import LinkedList from "./LinkedList";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState, useRef } from "react";
import "../App.css";
const center = { lat: 43.6532, lng: -79.347 };



function Map() {
  // const[centre, setCentre] = useState(); SET CENTRE BASED ON BUTTON
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();

  const destinationRef = useRef();

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    //eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.BICYCLING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div>
      <div className="mapFunctions">
        <button onClick={() => map.panTo(center)}>Align back to center</button>
        <button onClick={calculateRoute}>Calculate Route</button>
        <button onClick={clearRoute}>Clear Route</button>

        <Autocomplete>
          <input
            type="text"
            placeholder="Origin"
            ref={originRef}
            className="places"
          />
        </Autocomplete>
        <Autocomplete>
          <input
            type="text"
            placeholder="Destination"
            ref={destinationRef}
            className="places"
          />
        </Autocomplete>
      </div>

      <select>
        <option value="">Ninebot Max</option>
        <option value="">Onewheel</option>
        <option value="">Electric Unicycle</option>
      </select>

      <div className="mapInfo">
        <h2>Distance: {distance}</h2>
        <h2>Duration: {duration}</h2>
      </div>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
        mapTypeId="roadmap"
        onLoad={(map) => setMap(map)}
      >
        <MarkerF position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
}

export default Map;
