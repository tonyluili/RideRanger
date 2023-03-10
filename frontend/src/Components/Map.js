import React from "react";
import LinkedList from "./LinkedList";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Context } from "../App";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState, useRef } from "react";
import "../App.css";

function Map() {
  const[center, setCenter] = useState({ lat: 43.6532, lng: -79.347 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [loggedIn, setLoggedIn] = useContext(Context);
  const [vehicle, setVehicle] = React.useState("");
  const [vehicleDistance, setVehicleDistance] = useState(40)
  const [colour, setColour] = useState("mapInfoGreen")

  const handleChange = (event) => {
    setVehicle(event.target.value);
  };

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
    if(vehicleDistance > distance){
      setColour("mapInfoGreen")
    }
    else{
      setColour("mapInfoRed")
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  const handleClickScooter = () =>{
    setVehicleDistance(40)
  }
  const handleClickEuc = () =>{
    setVehicleDistance(80)
  }
  const handleClickOnewheel = () =>{
    setVehicleDistance(20)
  }

  return (
    <div>
      {loggedIn ? (
        <>
          {" "}
          <br />
          <Card raised={true}>
            <div className="mapFunctions">
              <Button variant="contained" onClick={() => map.panTo(center)}>
                Align back to center
              </Button>
              <Button variant="contained" onClick={calculateRoute}>
                Calculate Route
              </Button>
              <Button variant="contained" onClick={clearRoute}>
                Clear Route
              </Button>
            </div>
            <div className="addressInfo">
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
            <Box sx={{ minWidth: 30 }}>
              <FormControl fullWidth>
                <InputLabel>Vehicle</InputLabel>
                <Select value={vehicle} label="Vehicle" onChange={handleChange}>
                  <MenuItem value={40} onClick = {handleClickScooter}>Ninebot Max Scooter </MenuItem>
                  <MenuItem value={80} onClick = {handleClickEuc}>OneWheel</MenuItem>
                  <MenuItem value={20} onClick = {handleClickOnewheel}>Electric Unicycle</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className="mapInfo">
              <Typography className = {colour}>Distance: {distance}</Typography>
              <Typography>&nbsp;&nbsp;&nbsp;</Typography>
              <Typography>Duration: {duration}</Typography>
            </div>
          </Card>
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
        </>
      ) : (
        <Link to="/loginpage">
          {" "}
          <Typography justifyContent={center}>
            Please Login to Access Maps
          </Typography>
        </Link>
      )}
    </div>
  );
}

export default Map;
