import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState, useContext} from "react";
import { auth } from "../firebase";
import { Context } from "../App"

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
  return <div> {authUser ? (

    <>
      <p>{`Signed In as ${authUser.email}`}</p>
      <button onClick = {userSignOut}>Sign Out</button>
    </>
  ) : (
    <p>Signed Out</p>
  )}</div>
}



export default AuthDetails;
