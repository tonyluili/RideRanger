import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState, useContext} from "react";
import { auth } from "../firebase";
import { Context } from "../App"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);
  const [loggedIn, setLoggedIn] = useContext(Context);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setLoggedIn(true);
      } else {
        setAuthUser(null);
        setLoggedIn(false);
      }
    });

    return () =>{
        listen();
    }
  }, []);

  const userSignOut = () =>{
    signOut(auth).then(() => {
        console.log("signout successful")
    }).catch(err => console.log(err))
  }
  return <div className = "authDetails"> {authUser ? (

    <>
      <Typography>{`Signed In as ${authUser.email}`}</Typography>
      <Button variant = "contained" onClick = {userSignOut}>Sign Out</Button>
    </>
  ) : (
    <Typography>Signed Out</Typography>
  )}</div>
}



export default AuthDetails;
