import React from "react";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import AuthDetails from "./AuthDetails";
function LoginPage() {


  return (
    <div>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <AuthDetails></AuthDetails>
    </div>
  );
}

export default LoginPage;
