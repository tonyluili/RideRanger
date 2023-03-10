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
import NinebotImage from "./Images/ninebotmax.jpg";
import EucImage from "./Images/kingsong-ks-16x.jpg";
import OneWheelImage from "./Images/GT-OneWheel-GT.jpg"
function Home() {
  const [loggedIn, setLoggedIn] = useContext(Context);
  const [imageCounter, setImageCounter] = useState(0);
  const vehicleImages = [NinebotImage, EucImage, OneWheelImage]
  //Add LinkedList here

  const handleClickRight = () =>{
    if(imageCounter + 1 < 3){
      setImageCounter(imageCounter+1);
    }
    else{
      setImageCounter(0);
    }
  }

  const handleClickLeft = () =>{
    if(imageCounter - 1 >= 0){
      setImageCounter(imageCounter - 1);
    }
    else{
      setImageCounter(2);
    }
  }


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
            <br />
            <div className="carousel">
              <Button className="vehicleDisplayButton" variant="contained" onClick = {handleClickLeft}>
                <ArrowBackIosIcon />
              </Button>
              <img className="vehicleDisplay" src={vehicleImages[imageCounter]} alt="" />
              <Button className="vehicleDisplayButton" variant="contained" onClick = {handleClickRight}>
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
