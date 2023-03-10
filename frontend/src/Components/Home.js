import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../App";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LinkedList from "./LinkedList";
import VehicleImage from "./Images/ninebotmax.jpg";
function Home() {
  const [loggedIn, setLoggedIn] = useContext(Context);
  const [image, setImage] = useState("");

  //Add LinkedList here

  return (
    <div>
      <h1 className="homegreeting">
        {loggedIn ? (
          <div>
            <Typography variant="h1">Welcome to Ride Ranger 🛴🗺️</Typography>
            <br />
            <Typography>
              Ride Ranger is your personal ride arranger for your personal
              electric vehicle needs!
            </Typography>
            <Typography>
              Please browser our vast catalog of electric vehicles! ⚡
            </Typography>
            <div className="carousel">
              <Button className="vehicleDisplayButton" variant="contained">
                <ArrowBackIosIcon />
              </Button>
              <img className="vehicleDisplay" src={VehicleImage} alt="" />
              <Button className="vehicleDisplayButton" variant="contained">
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/loginpage"> Please Login </Link>
          </div>
        )}
      </h1>
    </div>
  );
}

export default Home;
