import React from "react";
import { useContext } from "react";
import { Context } from "../App";

function Home() {
  const [loggedIn, setLoggedIn] = useContext(Context);
  return (
    <div>
      <h1 className="homegreeting">
        {loggedIn ? "Ride Ranger 🛴🗺️" : "Please Login"}
      </h1>
    </div>
  );
}

export default Home;
